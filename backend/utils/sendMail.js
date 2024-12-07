import nodemailer from "nodemailer";

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465, // Use port 465 for secure connections
  secure: true, // Use `true` for port 465, `false` for all other ports
  auth: {
    user: "subhamsasmal396@gmail.com",
    pass: 'lvlttixuqnqgqcth',
  },
});

// Async function to send email
export async function sendMail(to, subject, text, html) {
  try {
    // Send mail with defined transport object
    const info = await transporter.sendMail({
      from: 'subhamsasmal396@gmail.com', // Sender address
      to,
      subject,
      text,
      html
    });

    console.log("Email sent: %s", info.messageId);
  } catch (error) {
    console.error("Error sending email:", error);
  }
}
