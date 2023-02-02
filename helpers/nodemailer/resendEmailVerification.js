const { User } = require("../../db/models/userModel");
const nodemailer = require("nodemailer");

async function resendEmailVerification(email, verifyToken) {
  try {
    let testEmailAccount = await nodemailer.createTestAccount();

    let transporter = nodemailer.createTransport({
      host: "smtp.ukr.net",
      port: 465,
      secure: true,
      auth: {
        user: "pebeeo@ukr.net",
        pass: "6mVLWrEHqcjBFuuq",
      },
    });

    const result = await transporter.sendMail({
      from: "pebeeo@ukr.net",
      to: `${email}`,
      subject: "Let's confirm your email address.",
      text: "Follow the link to verify your email.",
      html: `<a href="http://localhost:3000/users/verify/${verifyToken}">Click here</a>`,
    });
  } catch (error) {
    console.log("error in resendEmailVerification");
  }
}

module.exports = { resendEmailVerification };
