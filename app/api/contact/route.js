import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request) {
  try {
    const body = await request.json();
    const { name, email, phone, practiceName, companyName, message } = body || {};

    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: 'Name, email, and message are required.' },
        { status: 400 }
      );
    }

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
          <li><strong>Name:</strong> ${name}</li>
          <li><strong>Email:</strong> ${email}</li>
          <li><strong>Phone:</strong> ${phone || '—'}</li>
          <li><strong>Practice Name:</strong> ${practiceName || '—'}</li>
          <li><strong>Company Name:</strong> ${companyName || '—'}</li>
        </ul>
        <div style="margin-top: 16px; padding: 16px; background: #f8fafc; border-radius: 8px;">
          <strong>Message:</strong>
          <div style="margin-top: 8px; white-space: pre-wrap;">${message}</div>
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
