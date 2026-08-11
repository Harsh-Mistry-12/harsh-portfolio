import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, subject, message } = await req.json();

    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required fields." },
        { status: 400 }
      );
    }

    const smtpHost = process.env.SMTP_HOST || "smtp.gmail.com";
    const smtpPort = Number(process.env.SMTP_PORT) || 465;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const recipientEmail = process.env.CONTACT_RECEIVER_EMAIL || "hmistry864@gmail.com";

    if (!smtpUser || !smtpPass) {
      return NextResponse.json(
        {
          error: "Server email service is not configured. Missing SMTP_USER or SMTP_PASS.",
        },
        { status: 500 }
      );
    }

    const transporter = nodemailer.createTransport({
      host: smtpHost,
      port: smtpPort,
      secure: smtpPort === 465,
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailOptions = {
      from: `"${name}" <${smtpUser}>`,
      replyTo: email,
      to: recipientEmail,
      subject: `[PORTFOLIO CONTACT] ${subject || "New Message from " + name}`,
      html: `
        <div style="font-family: monospace, sans-serif; background-color: #e8e5de; padding: 24px; color: #0a0a0a;">
          <div style="max-width: 600px; margin: 0 auto; border: 2px solid #0a0a0a; background: #ffffff; padding: 20px; box-shadow: 4px 4px 0px #0a0a0a;">
            <h2 style="margin-top: 0; color: #d4500a; border-bottom: 1px solid #0a0a0a; padding-bottom: 10px;">
              // PORTFOLIO_CONTACT_MESSAGE
            </h2>
            <p><strong>Sender Name:</strong> ${name}</p>
            <p><strong>Sender Email:</strong> <a href="mailto:${email}">${email}</a></p>
            <p><strong>Subject:</strong> ${subject || "N/A"}</p>
            <hr style="border: 0; border-top: 1px solid #0a0a0a; margin: 20px 0;" />
            <p><strong>Message:</strong></p>
            <div style="background: #f4f1ea; padding: 16px; border: 1px solid #0a0a0a; white-space: pre-wrap;">${message}</div>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json({ success: true, message: "Email sent successfully!" });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to send email. Please try again later." },
      { status: 500 }
    );
  }
}
