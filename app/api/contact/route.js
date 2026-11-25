import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const submissions = new Map();

function escapeHtml(value) {
  return String(value || '')
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;');
}

export async function POST(request) {
  try {
    const body = await request.json();
    const {
      name,
      email,
      phone,
      practiceName,
      companyName,
      message,
      website,
      submissionId,
      gclid,
      gbraid,
      wbraid,
      utm_source,
      utm_medium,
      utm_campaign,
      utm_term,
      utm_content,
      landing_page,
      referrer,
    } = body || {};

    if (website) {
      return NextResponse.json({ success: true });
    }

    if (!name?.trim() || !email?.trim() || !message?.trim()) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(email.trim()) || name.trim().length > 100 || message.trim().length > 5000) {
      return NextResponse.json(
        { success: false, error: 'Please check the name, email, and message fields.' },
        { status: 400 }
      );
    }

    const forwarded = request.headers.get('x-forwarded-for');
    const ip = (forwarded || request.headers.get('x-real-ip') || 'unknown').split(',')[0].trim();
    const now = Date.now();
    const windowStart = now - 60 * 1000;
    const recent = (submissions.get(ip) || []).filter((timestamp) => timestamp > windowStart);
    if (recent.length >= 5) {
      return NextResponse.json(
        { success: false, error: 'Too many requests. Please try again shortly.' },
        { status: 429 }
      );
    }
    recent.push(now);
    submissions.set(ip, recent);

    if (submissionId) {
      const dedupeKey = `${ip}:${submissionId}`;
      if (submissions.has(dedupeKey)) {
        return NextResponse.json({ success: true });
      }
      submissions.set(dedupeKey, [now]);
    }

    const safeName = escapeHtml(name);
    const safeEmail = escapeHtml(email);
    const safePhone = escapeHtml(phone);
    const safePracticeName = escapeHtml(practiceName);
    const safeCompanyName = escapeHtml(companyName);
    const safeMessage = escapeHtml(message);

    const toEmail = process.env.CONTACT_TO_EMAIL || process.env.LEAD_EMAIL || 'hello@hiredbillingsupport.com';

    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST || 'mail.hiredbillingsupport.com',
      port: Number(process.env.SMTP_PORT || 465),
      secure: process.env.SMTP_SECURE === 'true' || true,
      auth: {
        user: process.env.SMTP_USER || 'hello@hiredbillingsupport.com',
        pass: process.env.SMTP_PASS,
      },
    });

    const html = `
      <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.6;">
        <h2 style="margin-bottom: 8px;">New Contact Form Submission</h2>
        <p style="margin-top: 0; color: #475569;">A visitor filled out the contact form on your website.</p>
        <ul style="padding-left: 20px;">
          <li><strong>Name:</strong> ${safeName}</li>
          <li><strong>Email:</strong> ${safeEmail}</li>
          <li><strong>Phone:</strong> ${safePhone || '—'}</li>
          <li><strong>Practice Name:</strong> ${safePracticeName || '—'}</li>
          <li><strong>Company Name:</strong> ${safeCompanyName || '—'}</li>
          <li><strong>gclid:</strong> ${escapeHtml(gclid) || '—'}</li>
          <li><strong>gbraid:</strong> ${escapeHtml(gbraid) || '—'}</li>
          <li><strong>wbraid:</strong> ${escapeHtml(wbraid) || '—'}</li>
          <li><strong>utm_source:</strong> ${escapeHtml(utm_source) || '—'}</li>
          <li><strong>utm_medium:</strong> ${escapeHtml(utm_medium) || '—'}</li>
          <li><strong>utm_campaign:</strong> ${escapeHtml(utm_campaign) || '—'}</li>
          <li><strong>utm_term:</strong> ${escapeHtml(utm_term) || '—'}</li>
          <li><strong>utm_content:</strong> ${escapeHtml(utm_content) || '—'}</li>
          <li><strong>Landing page:</strong> ${escapeHtml(landing_page) || '—'}</li>
          <li><strong>Referrer:</strong> ${escapeHtml(referrer) || '—'}</li>
        </ul>
        <div style="margin-top: 16px; padding: 16px; background: #f8fafc; border-radius: 8px;">
          <strong>Message:</strong>
          <div style="margin-top: 8px; white-space: pre-wrap;">${safeMessage}</div>
        </div>
      </div>
    `;

    await transporter.sendMail({
      from: process.env.SMTP_FROM || 'hello@hiredbillingsupport.com',
      to: toEmail,
      replyTo: email,
      subject: `New Contact Request from ${name}`,
      html,
      text: `Name: ${name}\nEmail: ${email}\nPhone: ${phone || '—'}\nPractice Name: ${practiceName || '—'}\nCompany Name: ${companyName || '—'}\n\nMessage:\n${message}`,
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Contact route error:', error);
    return NextResponse.json(
      { success: false, error: 'Email could not be sent. Please try again.' },
      { status: 500 }
    );
  }
}
