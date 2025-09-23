import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: NextRequest) {
  try {
    console.log("Contact API called");
    const { name, email, message } = await request.json();
    console.log("Form data received:", {
      name,
      email,
      message: message?.substring(0, 50) + "...",
    });

    if (!name || !email || !message) {
      console.log("Missing required fields");
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Check environment variables
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASSWORD) {
      console.error("Missing email environment variables");
      return NextResponse.json(
        { error: "Email configuration missing" },
        { status: 500 }
      );
    }

    console.log("Creating transporter...");
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // Test the connection
    console.log("Testing transporter connection...");
    await transporter.verify();
    console.log("Transporter verified successfully");

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "brennanlazzara@gmail.com",
      subject: `Contact Form Message from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
    };

    console.log("Sending email...");
    await transporter.sendMail(mailOptions);
    console.log("Email sent successfully");

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      {
        error: "Failed to send email",
        details: error instanceof Error ? error.message : "Unknown error",
      },
      { status: 500 }
    );
  }
}
