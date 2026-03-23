import { NextRequest, NextResponse } from 'next/server';

// ─────────────────────────────────────────────────────────────────
// RESEND SETUP
//
// 1. Create a free account at resend.com
// 2. Go to API Keys → Create API Key
// 3. Add to your .env.local:
//      RESEND_API_KEY=re_xxxxxxxxxxxx
//      RESEND_AUDIENCE_ID=your_audience_id   (from Resend → Audiences)
//      EMAIL_FROM=hello@nixcreative.com       (must be a verified domain)
//
// 4. In Resend, go to Audiences → Create Audience → name it "Insights List"
//    Copy the Audience ID and paste it as RESEND_AUDIENCE_ID
// ─────────────────────────────────────────────────────────────────

export async function POST(req: NextRequest) {
  try {
    const { email } = await req.json();

    if (!email || !email.includes('@')) {
      return NextResponse.json(
        { error: 'A valid email address is required.' },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const audienceId = process.env.RESEND_AUDIENCE_ID;
    const fromEmail = process.env.EMAIL_FROM ?? 'hello@nixcreative.com';

    if (!apiKey) {
      console.error('RESEND_API_KEY is not set');
      return NextResponse.json(
        { error: 'Email service is not configured yet.' },
        { status: 500 }
      );
    }

    // ── Step 1: Add contact to Resend Audience ──────────────────
    if (audienceId) {
      await fetch(`https://api.resend.com/audiences/${audienceId}/contacts`, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${apiKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          unsubscribed: false,
        }),
      });
    }

    // ── Step 2: Send welcome email to subscriber ─────────────────
    const emailRes = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${apiKey}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: `Nix Creative <${fromEmail}>`,
        to: [email],
        subject: "You're on the list — welcome to Nix Insights",
        html: welcomeEmailHtml(email),
      }),
    });

    if (!emailRes.ok) {
      const error = await emailRes.json();
      console.error('Resend error:', error);
      return NextResponse.json(
        { error: 'Failed to send welcome email.' },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (err) {
    console.error('Subscribe route error:', err);
    return NextResponse.json(
      { error: 'Something went wrong. Please try again.' },
      { status: 500 }
    );
  }
}

// ─────────────────────────────────────────────────────────────────
// WELCOME EMAIL TEMPLATE
// Update the copy here to match your voice.
// ─────────────────────────────────────────────────────────────────
function welcomeEmailHtml(email: string): string {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Welcome to Nix Insights</title>
</head>
<body style="margin:0;padding:0;background-color:#f5f5f5;font-family:-apple-system,BlinkMacSystemFont,'Segoe UI',sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f5f5f5;padding:48px 16px;">
    <tr>
      <td align="center">
        <table width="100%" cellpadding="0" cellspacing="0" style="max-width:560px;">

          <!-- Logo / wordmark -->
          <tr>
            <td style="padding-bottom:32px;">
              <p style="margin:0;font-size:28px;font-weight:700;color:#111111;letter-spacing:-0.5px;">nix</p>
            </td>
          </tr>

          <!-- Card -->
          <tr>
            <td style="background-color:#111111;border-radius:24px;padding:48px 40px;">

              <!-- Accent bar -->
              <div style="width:40px;height:4px;background-color:#b4ff39;border-radius:2px;margin-bottom:32px;"></div>

              <!-- Headline -->
              <h1 style="margin:0 0 16px;font-size:28px;font-weight:700;color:#ffffff;line-height:1.2;">
                You're on the list.
              </h1>

              <!-- Body -->
              <p style="margin:0 0 16px;font-size:16px;color:#9ca3af;line-height:1.6;">
                Hey — thanks for signing up. We're putting together practical
                marketing content built specifically for service business owners.
                No fluff, no recycled takes, no spam.
              </p>
              <p style="margin:0 0 32px;font-size:16px;color:#9ca3af;line-height:1.6;">
                Here's what we'll be covering:
              </p>

              <!-- Topic list -->
              <table cellpadding="0" cellspacing="0" style="margin-bottom:40px;">
                ${[
                  'SEO tips for local businesses',
                  'Social media that actually converts',
                  'AI tools for small business owners',
                  'Website design & conversion',
                ].map(topic => `
                <tr>
                  <td style="padding:6px 0;">
                    <table cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="width:8px;height:8px;background-color:#b4ff39;border-radius:50%;vertical-align:middle;padding-right:12px;"></td>
                        <td style="font-size:14px;color:#d1d5db;vertical-align:middle;">${topic}</td>
                      </tr>
                    </table>
                  </td>
                </tr>`).join('')}
              </table>

              <!-- CTA -->
              <table cellpadding="0" cellspacing="0">
                <tr>
                  <td style="background-color:#b4ff39;border-radius:100px;padding:12px 28px;">
                    <a href="https://nixcreative.com" style="font-size:14px;font-weight:600;color:#111111;text-decoration:none;">
                      Visit nixcreative.com →
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding-top:24px;">
              <p style="margin:0;font-size:12px;color:#9ca3af;line-height:1.6;">
                You're receiving this because ${email} signed up at nixcreative.com.
                <br/>
                No spam. <a href="#" style="color:#9ca3af;">Unsubscribe anytime.</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}
