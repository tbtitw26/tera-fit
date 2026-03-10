import { sendEmail } from "@/backend/utils/sendEmail";
import { ENV } from "@/backend/config/env";

export const emailService = {
    async sendWelcomeEmail(data: {
        email: string;
        firstName: string;
    }) {
        const subject = "Welcome to Aries Sim 🎉";

        const text = `
Hi ${data.firstName},

Thank you for registering at Aries Sim.
Your account has been successfully created.

You can now sign in and start using the platform.

Best regards,
Aries Sim Team
        `.trim();

        const html = `
        <div style="font-family: Arial, sans-serif; background:#f4faff; padding:20px; color:#333;">
          <div style="max-width:600px; margin:auto; background:#fff; border-radius:8px; padding:30px; box-shadow:0 4px 10px rgba(0,0,0,0.05);">
            <h2 style="color:#007BFF; text-align:center; margin-bottom:24px;">
              Welcome to Aries Sim 🎉
            </h2>

            <p style="font-size:16px; line-height:1.6; color:#333;">
              Hi <strong>${escapeHtml(data.firstName)}</strong>,
            </p>

            <p style="font-size:16px; line-height:1.6; color:#333;">
              Thank you for registering at <strong>Aries Sim</strong>.
              Your account has been successfully created.
            </p>

            <p style="font-size:16px; line-height:1.6; color:#333;">
              You can now sign in and start using the platform.
            </p>

            <div style="text-align:center; margin:30px 0;">
              <a
                href="${ENV.APP_URL}"
                style="background:#007BFF; color:#fff; text-decoration:none; padding:12px 24px; border-radius:6px; font-weight:bold; display:inline-block;"
              >
                Open Aries Sim
              </a>
            </div>

            <hr style="margin:20px 0; border:none; border-top:1px solid #eee;" />

            <p style="font-size:14px; color:#777; text-align:center;">
              © ${new Date().getFullYear()} Averis – All rights reserved.
            </p>
          </div>
        </div>
        `;

        return await sendEmail(data.email, subject, text, html);
    },
};

function escapeHtml(value: string) {
    return value
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#039;");
}