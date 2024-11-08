import nodemailer from "nodemailer";

// Define the sendEmail function with parameter types
export async function sendEmail(
  to: string,
  subject: string,
  html: string
): Promise<void> {
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST as string,
    port: parseInt(process.env.SMTP_PORT as string, 10),
    auth: {
      user: process.env.SMTP_USER as string,
      pass: process.env.SMTP_PASS as string,
    },
  });

  const mailOptions = {
    from: process.env.SMTP_USER as string,
    to,
    subject,
    html,
  };

  await transporter.sendMail(mailOptions);
}
