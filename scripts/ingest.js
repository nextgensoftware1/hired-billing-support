// scripts/ingest.js
// ─────────────────────────────────────────────────────────────
// Run this once to embed your content into Pinecone:
//   node scripts/ingest.js
//
// Run again whenever you update hbs-content.js
// ─────────────────────────────────────────────────────────────

require("dotenv").config({ path: ".env.local" });
const { Pinecone } = require("@pinecone-database/pinecone");
const HBS_CONTENT = require("./hbs-content");

const pinecone = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });

// Simple hash-based fake embedding for keyword matching
// Works fine for small content sets like HBS website
function simpleEmbedding(text) {
  const vector = new Array(768).fill(0);
  const words = text.toLowerCase().split(/\s+/);
  words.forEach((word) => {
    for (let i = 0; i < word.length; i++) {
      const idx = (word.charCodeAt(i) * (i + 1) * 31) % 768;
      vector[idx] += 1;
    }
  });
  // Normalize
  const magnitude = Math.sqrt(vector.reduce((sum, v) => sum + v * v, 0)) || 1;
  return vector.map((v) => v / magnitude);
}

async function getEmbedding(text) {
  return simpleEmbedding(text);
}

async function ingest() {
  console.log("\n🚀 HBS Content Ingestion Starting...\n");
  console.log(`   Index: ${process.env.PINECONE_INDEX_NAME}`);
  console.log(`   Chunks to embed: ${HBS_CONTENT.length}\n`);

  const index = pinecone.index(process.env.PINECONE_INDEX_NAME);
  const vectors = [];

  for (let i = 0; i < HBS_CONTENT.length; i++) {
    const chunk = HBS_CONTENT[i];
    process.stdout.write(`   [${i + 1}/${HBS_CONTENT.length}] Embedding: "${chunk.title}" ... `);

    const textToEmbed = `${chunk.title}\n\n${chunk.content}`;
    const embedding = await getEmbedding(textToEmbed);

    vectors.push({
      id: chunk.id,
      values: embedding,
      metadata: {
        title: chunk.title,
        content: chunk.content,
        source: chunk.source,
      },
    });

    console.log("✅");
    await new Promise((r) => setTimeout(r, 300)); // avoid rate limiting
  }

  console.log(`\n📦 Uploading ${vectors.length} vectors to Pinecone...`);

  // Upsert in batches of 10
  for (let i = 0; i < vectors.length; i += 10) {
    const batch = vectors.slice(i, i + 10);
    const batchNum = Math.floor(i / 10) + 1;
    try {
      await index.upsert({ records: batch });
      console.log(`   ✅ Batch ${batchNum}: ${batch.length} vectors uploaded`);
    } catch (err) {
      console.error(`   ❌ Batch ${batchNum} failed:`, err.message);
      throw err;
    }
  }

  console.log("\n✅ Ingestion complete!");
  console.log(`   ${vectors.length} content chunks are now live in Pinecone.\n`);
}

ingest().catch((err) => {
  console.error("\n❌ Ingestion failed:", err.message);
  process.exit(1);
});