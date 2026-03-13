import nodemailer from "nodemailer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {

  try {

    const body = await req.json();

    const { name, email, phone, message } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        { success: false, error: "Missing required fields" },
        { status: 400 }
      );
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    await transporter.sendMail({

      from: `"Jinsharnam Website" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER,
      subject: "New Contact Message - Jinsharnam Tirth",

      html: `
      <div style="font-family: Georgia, serif; background:#FFF8E7; padding:30px">

        <div style="max-width:600px;margin:auto;background:white;border-radius:12px;padding:30px;border:1px solid #f3e2b5">

          <h2 style="color:#4B1E00;margin-bottom:10px">
            New Contact Message
          </h2>

          <p style="color:#7a5c2e;margin-bottom:20px">
            A new visitor has contacted Jinsharnam Tirth through the website.
          </p>

          <table style="width:100%;border-collapse:collapse">

            <tr>
              <td style="padding:8px 0;color:#7a5c2e"><strong>Name</strong></td>
              <td style="padding:8px 0">${name}</td>
            </tr>

            <tr>
              <td style="padding:8px 0;color:#7a5c2e"><strong>Email</strong></td>
              <td style="padding:8px 0">${email}</td>
            </tr>

            <tr>
              <td style="padding:8px 0;color:#7a5c2e"><strong>Phone</strong></td>
              <td style="padding:8px 0">${phone || "-"}</td>
            </tr>

            <tr>
              <td style="padding:8px 0;color:#7a5c2e"><strong>Message</strong></td>
              <td style="padding:8px 0">${message}</td>
            </tr>

          </table>

          <hr style="margin:25px 0;border:none;border-top:1px solid #f1e1b0">

          <p style="font-size:13px;color:#9c7a3c">
            This email was sent from the contact form on the Jinsharnam Tirth website.
          </p>

        </div>

      </div>
      `
    });

    return NextResponse.json({ success: true });

  } catch (error) {

    console.error(error);

    return NextResponse.json(
      { success: false },
      { status: 500 }
    );

  }

}