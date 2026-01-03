import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  const { name, email, message, company } = await req.json();

  // 🤖 スパム判定（ハニーポット）
  if (company) {
    return NextResponse.json(
      { message: "Spam detected" },
      { status: 200 } // ← あえて成功扱い
    );
  }

  if (!name || !email || !message) {
    return NextResponse.json({ message: "Invalid request" }, { status: 400 });
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
      from: process.env.MAIL_USER,
      to: process.env.MAIL_TO,
      subject: "お問い合わせが届きました",
      text: `
お名前: ${name}
メール: ${email}

${message}
      `,
    });

    return NextResponse.json({ message: "Success" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ message: "Mail send failed" }, { status: 500 });
  }
}
