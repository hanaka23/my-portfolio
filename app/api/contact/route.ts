import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const formData = await req.formData();

  const name = formData.get("name");
  const email = formData.get("email");
  const message = formData.get("message");

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Invalid form data" },
      { status: 400 }
    );
  }

  const transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT),
    secure: true,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  try {
    await transporter.sendMail({
      from: `"お問い合わせ" <${process.env.MAIL_USER}>`,
      to: process.env.MAIL_TO,
      replyTo: String(email),
      subject: "【お問い合わせ】ポートフォリオサイト",
      text: `
お名前: ${name}
メール: ${email}

内容:
${message}
      `,
    });

    return NextResponse.redirect(
      new URL("/?success=1", req.url),
      303
    );
  } catch (error) {
    console.error(error);
    return NextResponse.redirect(
      new URL("/?error=1", req.url),
      303
    );
  }
}
