// lib/pinecone.js
// Uses Groq embeddings (free) + Pinecone search

import { Pinecone } from "@pinecone-database/pinecone";

const pinecone = new Pinecone({ apiKey: process.env.PINECONE_API_KEY });

/**
 * Get text embedding using simple hash-based algorithm
 */
function simpleEmbedding(text) {
  const vector = new Array(768).fill(0);
  const words = text.toLowerCase().split(/\s+/);
  words.forEach((word) => {
    for (let i = 0; i < word.length; i++) {
      const idx = (word.charCodeAt(i) * (i + 1) * 31) % 768;
      vector[idx] += 1;
    }
  });
  const magnitude = Math.sqrt(vector.reduce((sum, v) => sum + v * v, 0)) || 1;
  return vector.map((v) => v / magnitude);
}

export async function getEmbedding(text) {
  return simpleEmbedding(text);
}

/**
 * Search Pinecone for top matching content chunks
 * @param {string} query - User's message
 * @param {number} topK  - Number of results to return
 * @returns {string}     - Context string to inject into prompt
 */
export async function searchKnowledgeBase(query, topK = 3) {
  try {
    const index = pinecone.index(process.env.PINECONE_INDEX_NAME);
    const queryEmbedding = await getEmbedding(query);

    const results = await index.query({
      vector: queryEmbedding,
      topK,
      includeMetadata: true,
    });

    if (!results.matches || results.matches.length === 0) return "";

    const context = results.matches
      .filter((m) => m.score > 0.25)
      .map((m) => `[${m.metadata.title}]\n${m.metadata.content}`)
      .join("\n\n---\n\n");

    return context;
  } catch (err) {
    console.error("Pinecone search error:", err.message);
    return ""; // Graceful fallback — bot still works without RAG context
  }
}
