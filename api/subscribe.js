import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export default async function handler(req, res) {
  // Only allow POST
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { email, name } = req.body;

  if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: 'Valid email is required' });
  }

  try {
    // 1. Send welcome email to the new user
    await resend.emails.send({
      from: 'PRP <hello@prp-app.website>',
      to: email,
      subject: 'Welcome to PRP 👋',
      html: `
        <div style="font-family: Inter, sans-serif; max-width: 560px; margin: 0 auto; color: #111;">
          <h1 style="font-size: 24px; font-weight: 700; margin-bottom: 8px;">
            Welcome to PRP${name ? `, ${name}` : ''}!
          </h1>
          <p style="color: #555; font-size: 16px; line-height: 1.6;">
            Thanks for joining — you're now on the list. We'll let you know about
            new features, releases, and updates as they ship.
          </p>
          <a href="https://web.prp-app.website"
             style="display:inline-block; margin-top:24px; padding:12px 24px;
                    background:#22C55E; color:#000; font-weight:700;
                    border-radius:8px; text-decoration:none;">
            Open PRP App →
          </a>
          <p style="margin-top:40px; font-size:13px; color:#888;">
            PRP · A Kyberia Labs product ·
            <a href="https://prp-app.website" style="color:#888;">prp-app.website</a>
          </p>
        </div>
      `,
    });

    // 2. Notify yourself about the new signup
    await resend.emails.send({
      from: 'PRP Signups <hello@prp-app.website>',
      to: 'abdelfattah.msa99@gmail.com',
      subject: `New signup: ${email}`,
      html: `<p>New subscriber: <strong>${email}</strong>${name ? ` (${name})` : ''}</p>`,
    });

    return res.status(200).json({ success: true });
  } catch (err) {
    console.error('Resend error:', err);
    return res.status(500).json({ error: 'Failed to send email' });
  }
}
