// app/api/chat/route.js
// RAG Chat endpoint — Groq AI + Pinecone context

import { NextResponse } from "next/server";
import { searchKnowledgeBase } from "@/lib/pinecone";

const GROQ_API_URL = "https://api.groq.com/openai/v1/chat/completions";

const BASE_SYSTEM_PROMPT = `You are the official website assistant for Hired Billing Support (HBS), a U.S.-focused healthcare MSO and operational support partner.

Your job is to help healthcare organizations understand HBS services, qualify their needs, and guide them toward booking a consultation.
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LEAD CAPTURE — CRITICAL INSTRUCTION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
When a user provides ALL of the following in any message (together or separately):
- Name
- Organization
- Email
- Phone
- State
- Service needed

You MUST immediately output this EXACT block at the very end of your response.
Do NOT skip this. Do NOT change the format. Do NOT add extra text after it:

LEAD_CAPTURED:
Name: [value]
Organization: [value]
Email: [value]
Phone: [value]
State: [value]
Service: [value]
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
ANSWER RULES
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
- Answer ONLY based on the WEBSITE CONTEXT provided below.
- If the answer is not in the context, say: "That's a great question — I'd recommend speaking directly with our HBS team for the most accurate answer."
- Never make up services, prices, timelines, or guarantees.
- Do not give medical, legal, or financial advice.
- Do not ask for or accept patient data, PHI, SSNs, or insurance ID numbers. If someone tries to share this, say: "Please don't enter any patient or personal health information here. Contact us directly through a secure channel."

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
TONE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Professional, warm, concise. Sound like a knowledgeable healthcare operations consultant — not a robot. Keep replies to 2-4 sentences unless more detail is genuinely needed.

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LEAD QUALIFICATION
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
Naturally work these in one at a time:
- What type of organization do you operate?
- What specialty or service line?
- Which U.S. state are you in?
- Are you currently billing insurance or preparing to launch?
- What is your biggest current challenge?

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
LEAD CAPTURE
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
After understanding their needs, politely collect:
Name, Organization name, Email address, Phone number, State, Service needed.

Ask for these one at a time — not all at once. When you have collected all of this, respond with this EXACT format at the end of your message (do not change the labels):

LEAD_CAPTURED:
Name: [value]
Organization: [value]
Email: [value]
Phone: [value]
State: [value]
Service: [value]

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
CLOSING
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
End every serious service inquiry with: "Would you like our team to review your current situation and recommend the best next step?"

━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
WEBSITE CONTEXT (answer from this only):
━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
{CONTEXT}`;

export async function POST(request) {
  try {
    const { messages } = await request.json();

    if (!messages?.length) {
      return NextResponse.json({ error: "No messages provided" }, { status: 400 });
    }

    // Get latest user message for RAG search
    const lastUserMsg = [...messages].reverse().find((m) => m.role === "user");
    const query = lastUserMsg?.content || "";

    // Fetch relevant context from Pinecone
    const context = query ? await searchKnowledgeBase(query, 3) : "";

    const systemPrompt = BASE_SYSTEM_PROMPT.replace(
      "{CONTEXT}",
      context || "No specific context matched. Use general HBS knowledge and recommend a direct consultation for specifics."
    );

    // Call Groq API
    const groqRes = await fetch(GROQ_API_URL, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.GROQ_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama-3.3-70b-versatile",
        max_tokens: 800,
        temperature: 0.4,
        messages: [
          { role: "system", content: systemPrompt },
          ...messages.map((m) => ({ role: m.role, content: m.content })),
        ],
      }),
    });

    if (!groqRes.ok) {
      const err = await groqRes.text();
      console.error("Groq error:", err);
      return NextResponse.json({ error: "AI service error" }, { status: 500 });
    }

    const groqData = await groqRes.json();
    const rawText = groqData.choices[0]?.message?.content || "I'm sorry, I couldn't process that. Please try again.";

    // Check if a complete lead was captured
    let leadData = null;
    let displayText = rawText;

    if (rawText.includes("LEAD_CAPTURED:")) {
      const parts = rawText.split("LEAD_CAPTURED:");
      displayText = parts[0].trim();
      const leadBlock = parts[1] || "";

      const parse = (label) => {
        const match = leadBlock.match(new RegExp(`${label}:\\s*(.+)`));
        return match?.[1]?.trim() || "";
      };

      const email = parse("Email");
      const name = parse("Name");

      if (email) {
        leadData = {
          name: name,
          organization: parse("Organization"),
          email: email,
          phone: parse("Phone"),
          state: parse("State"),
          service: parse("Service"),
          conversation: messages
            .slice(-10)
            .map((m) => `${m.role === "user" ? "Visitor" : "HBS Bot"}: ${m.content}`)
            .join("\n"),
        };
        console.log("✅ Lead captured:", name, email);
      }
    }

    // If LEAD_CAPTURED not triggered but all data present, force capture
    if (!leadData) {
      const allText = messages.map((m) => m.content).join(" ") + " " + rawText;
      const emailMatch = allText.match(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/);
      const phoneMatch = allText.match(/(\+?1[-.\s]?)?\(?\d{3}\)?[-.\s]?\d{3}[-.\s]?\d{4}/);
      const nameMatch = allText.match(/my name is ([A-Za-z\s]+)/i);
      const orgMatch = allText.match(/organization is ([A-Za-z\s]+)/i);
      const stateMatch = allText.match(/i am in ([A-Za-z\s]+)/i);
      const serviceMatch = allText.match(/i need ([A-Za-z\s]+help)/i);

      if (emailMatch && phoneMatch && nameMatch) {
        leadData = {
          name: nameMatch?.[1]?.trim() || "",
          organization: orgMatch?.[1]?.trim() || "",
          email: emailMatch[0],
          phone: phoneMatch[0],
          state: stateMatch?.[1]?.trim() || "",
          service: serviceMatch?.[1]?.trim() || "",
          conversation: messages
            .slice(-10)
            .map((m) => `${m.role === "user" ? "Visitor" : "HBS Bot"}: ${m.content}`)
            .join("\n"),
        };
        console.log("✅ Lead auto-captured:", leadData.name, leadData.email);
      }
    }

    return NextResponse.json({ message: displayText, leadData });
  } catch (err) {
    console.error("Chat endpoint error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}