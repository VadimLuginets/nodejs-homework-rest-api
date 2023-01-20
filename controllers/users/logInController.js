const { login } = require("../../db/auth/index");
const { User } = require("../../db/models/userModel");
const { loginError } = require("../../helpers/errors/index");
const { post } = require("../../schemas/auth/index");
async function logInController(req, res) {
  const { email, password } = req.body;
  const isValidData = post.validate(req.body);
  if (isValidData.error) {
    return res.status(400).json({ msg: "Validation error" });
  }
  const user = await User.findOne({ email });
  if (!user) {
    return res.status(400).json({ msg: "There is " });
  }
  const token = await login(email, password);
  token
    ? res.json({
        status: "success",
        token,
        user: { email, subscription: user.subscription },
      })
    : loginError(res);
}

module.exports = { logInController };
