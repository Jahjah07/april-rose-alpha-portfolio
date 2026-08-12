import { NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      service,
      message,
    } = body;

    // Basic validation
    if (!name || !email || !message) {
      return NextResponse.json(
        {
          error: "Please complete all required fields.",
        },
        { status: 400 }
      );
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY is not configured.");

      return NextResponse.json(
        {
          error: "Email service is not configured.",
        },
        { status: 500 }
      );
    }

    if (!process.env.CONTACT_EMAIL) {
      console.error("CONTACT_EMAIL is not configured.");

      return NextResponse.json(
        {
          error: "Contact email is not configured.",
        },
        { status: 500 }
      );
    }

    const { data, error } = await resend.emails.send({
      from: "Portfolio Contact <onboarding@resend.dev>",
      to: [process.env.CONTACT_EMAIL],
      replyTo: email,
      subject: `New Portfolio Inquiry — ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 650px; margin: 0 auto; color: #222;">
          
          <h2 style="margin-bottom: 24px;">
            New Portfolio Contact
          </h2>

          <div style="margin-bottom: 24px;">
            <p style="margin: 0 0 6px; color: #777; font-size: 13px;">
              NAME
            </p>

            <p style="margin: 0; font-size: 16px;">
              ${escapeHtml(name)}
            </p>
          </div>

          <div style="margin-bottom: 24px;">
            <p style="margin: 0 0 6px; color: #777; font-size: 13px;">
              EMAIL
            </p>

            <p style="margin: 0; font-size: 16px;">
              ${escapeHtml(email)}
            </p>
          </div>

          <div style="margin-bottom: 24px;">
            <p style="margin: 0 0 6px; color: #777; font-size: 13px;">
              SERVICE
            </p>

            <p style="margin: 0; font-size: 16px;">
              ${escapeHtml(service || "Not specified")}
            </p>
          </div>

          <div style="margin-bottom: 24px;">
            <p style="margin: 0 0 6px; color: #777; font-size: 13px;">
              MESSAGE
            </p>

            <div style="
              background: #f7f7f7;
              border-radius: 10px;
              padding: 16px;
              font-size: 15px;
              line-height: 1.7;
              white-space: pre-wrap;
            ">
              ${escapeHtml(message)}
            </div>
          </div>

          <hr style="border: 0; border-top: 1px solid #eee; margin: 30px 0;" />

          <p style="font-size: 12px; color: #999;">
            This message was sent through your portfolio contact form.
          </p>

        </div>
      `,
    });

    if (error) {
      console.error("Resend error:", error);

      return NextResponse.json(
        {
          error: "Failed to send your message. Please try again.",
        },
        { status: 500 }
      );
    }

    return NextResponse.json({
      success: true,
      id: data?.id,
    });
  } catch (error) {
    console.error("Contact form error:", error);

    return NextResponse.json(
      {
        error: "Something went wrong. Please try again.",
      },
      { status: 500 }
    );
  }
}

/**
 * Prevent user-submitted content from being inserted
 * directly into the HTML email.
 */
function escapeHtml(value: string) {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}