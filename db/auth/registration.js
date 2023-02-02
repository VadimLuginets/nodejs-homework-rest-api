const { User } = require("../models/userModel");
const { generateDefaultAvatar } = require("../../helpers/gravatar/index");
const { v4: uuidv4 } = require("uuid");
const { emailVerification } = require("../../helpers/nodemailer/index");

async function registration(email, password) {
  const verifyToken = uuidv4();
  const AVATAR_URL = generateDefaultAvatar();
  const user = new User({
    email,
    password,
    avatarURL: await AVATAR_URL,
    verificationToken: verifyToken,
  });
  await user.save();
  await emailVerification(email, verifyToken);
}

module.exports = { registration };
