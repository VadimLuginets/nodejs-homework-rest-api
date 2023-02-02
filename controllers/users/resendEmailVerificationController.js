const {
  resendEmailVerification,
} = require("../../helpers/nodemailer/index.js");
const { User } = require("../../db/models/userModel");

async function resendEmailVerificationController(req, res, next) {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ message: "missing required field email" });
    }
    const user = await User.findOne({ email });
    if (!user) {
      throw new Error("There is not user with this email");
    }
    const { verificationToken, verify } = user;
    if (verify) {
      return res.json({ message: "This user does not need verify" });
    }
    await resendEmailVerification(email, verificationToken);
    res.json({ message: "Check your email we sent new post" });
  } catch (error) {
    console.log(error);
    res.status(404).json({ message: `Not found` });
  }
}

module.exports = { resendEmailVerificationController };
