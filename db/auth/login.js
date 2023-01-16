const { User } = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const { secret } = require("../../helpers/secret/index");

async function login(email, password) {
  const user = await User.findOne({ email });
  if (!user) {
    return null;
  }
  if (!(await bcrypt.compare(password, user.password))) {
    return null;
  }
  const token = jwt.sign({ _id: user.id }, secret);
  await User.updateOne({ email }, { token });
  return token;
}

module.exports = { login };
