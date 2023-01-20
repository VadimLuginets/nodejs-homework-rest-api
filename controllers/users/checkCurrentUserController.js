const { User } = require("../../db/models/userModel");
const { authError } = require("../../helpers/errors/index");

async function checkCurrentUserController(req, res, next) {
  try {
    const [tokenType, token] = req.headers["authorization"].split(" ");
    if (!token) {
      throw new Error();
    }
    const user = await User.findOne({ token });
    if (!user) {
      throw new Error();
    }
    const { email, subscription } = user;
    res.status(200).json({ email, subscription });
  } catch (error) {
    authError(res);
  }
}
module.exports = { checkCurrentUserController };
