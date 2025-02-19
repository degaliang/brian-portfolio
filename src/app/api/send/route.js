import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const fromEmail = process.env.FROM_EMAIL;
const myEmail = process.env.MY_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  try {
    const contactEmailData = await resend.emails.send({
      from: fromEmail,
      to: [email],
      subject: "Thanks for contacting Jinxuan Liang",
      react: (
        <>
          <p>Thank you for contacting me! I will get back to you as soon as possible! </p>
          <p>New message sent:</p>
          <h3>{subject}</h3>
          <p>{message}</p>
        </>
      ),
    });
    
    const myEmailData = await resend.emails.send({
      from: fromEmail,
      to: [myEmail],
      subject: "Contact message from portfolio page",
      react: (
        <>
          <h3>{subject}</h3>
          <p>{message}</p>
        </>
      ),
    });

    return NextResponse.json({contactEmailData, myEmailData});
  } catch (error) {
    return NextResponse.json({ error });
  }
}