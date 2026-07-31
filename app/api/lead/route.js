// app/api/lead/route.js
// Sends lead notification email to hello@hiredbillingsupport.com via Resend

import { NextResponse } from "next/server";

export async function POST(request) {
  try {
    const lead = await request.json();
    const { name, organization, email, phone, state, service, conversation } = lead;

    const html = `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <style>
    body { font-family: Arial, sans-serif; background: #f4f7fb; margin: 0; padding: 20px; }
    .card { background: white; border-radius: 12px; max-width: 560px; margin: 0 auto; overflow: hidden; box-shadow: 0 2px 12px rgba(0,0,0,0.08); }
    .header { background: linear-gradient(135deg, #1a6fa8, #0e4d7a); padding: 28px 32px; }
    .header h1 { color: white; margin: 0; font-size: 20px; }
    .header p { color: rgba(255,255,255,0.8); margin: 6px 0 0; font-size: 13px; }
    .body { padding: 28px 32px; }
    .badge { display: inline-block; background: #dcfce7; color: #166534; font-size: 12px; font-weight: 600; padding: 4px 12px; border-radius: 20px; margin-bottom: 20px; }
    .field { margin-bottom: 16px; }
    .label { font-size: 11px; font-weight: 700; color: #94a3b8; text-transform: uppercase; letter-spacing: 0.06em; margin-bottom: 4px; }
    .value { font-size: 15px; color: #1e293b; font-weight: 500; }
    .divider { border: none; border-top: 1px solid #e8edf3; margin: 24px 0; }
    .convo { background: #f8fafc; border-radius: 8px; padding: 16px; font-size: 13px; color: #475569; line-height: 1.7; white-space: pre-wrap; max-height: 260px; overflow-y: auto; }
    .footer { background: #f8fafc; padding: 16px 32px; text-align: center; font-size: 12px; color: #94a3b8; border-top: 1px solid #e8edf3; }
  </style>
</head>
<body>
  <div class="card">
    <div class="header">
      <h1>🔔 New Lead from HBS Chatbot</h1>
      <p>A visitor completed lead qualification on your website</p>
    </div>
    <div class="body">
      <div class="badge">✅ Lead Captured</div>
      <div class="field"><div class="label">Name</div><div class="value">${name || "—"}</div></div>
      <div class="field"><div class="label">Organization</div><div class="value">${organization || "—"}</div></div>
      <div class="field"><div class="label">Email</div><div class="value"><a href="mailto:${email}" style="color:#1a6fa8">${email || "—"}</a></div></div>
      <div class="field"><div class="label">Phone</div><div class="value">${phone || "—"}</div></div>
      <div class="field"><div class="label">State</div><div class="value">${state || "—"}</div></div>
      <div class="field"><div class="label">Service Needed</div><div class="value">${service || "—"}</div></div>
      <hr class="divider">
      <div class="label">Conversation Summary</div>
      <div class="convo">${conversation || "No conversation recorded."}</div>
    </div>
    <div class="footer">Sent by HBS Website Chatbot · hello@hiredbillingsupport.com</div>
  </div>
</body>
</html>`;

    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from: "HBS Chatbot <onboarding@resend.dev>",
        to: [process.env.LEAD_EMAIL || "hello@hiredbillingsupport.com"],
        subject: `🔔 New HBS Lead: ${name || email || "Website Visitor"} — ${service || "General Inquiry"}`,
        html,
      }),
    });

    if (!res.ok) {
      const err = await res.text();
      console.error("Resend error:", err);
      return NextResponse.json({ error: "Email failed" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Lead route error:", err);
    return NextResponse.json({ error: "Server error" }, { status: 500 });
  }
}
