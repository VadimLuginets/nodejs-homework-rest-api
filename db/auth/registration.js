const { User } = require("../models/userModel");
const { generateDefaultAvatar } = require("../../helpers/gravatar/index");

async function registration(email, password) {
  const AVATAR_URL = generateDefaultAvatar();
  const user = new User({
    email,
    password,
    avatarURL: await AVATAR_URL,
  });
  await user.save();
}

module.exports = { registration };
