const { User } = require("../models/userModel");

async function registration(email, password) {
  const user = new User({
    email,
    password,
  });
  await user.save();
}

module.exports = { registration };
