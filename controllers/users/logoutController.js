const { User } = require("../../db/models/userModel");
const { secret } = require("../../helpers/secret/index");
const jwt = require("jsonwebtoken");
const { authError } = require("../../helpers/errors/index");

async function logoutController(req, res) {
  try {
    const [tokenType, token] = req.headers["authorization"].split(" ");
    if (tokenType !== "Bearer") {
      console.log("invalid token type");
      return authError(res);
    }
    if (!token) {
      return authError(res);
    }
    const decoded = jwt.decode(token, secret);
    const { _id } = decoded;
    const user = await User.findOne({ _id });
    const TokenFromDb = user.token;
    if (token === TokenFromDb) {
      await User.updateOne({ _id }, { token: null });
      res.status(204).json();
    } else {
      throw new Error();
    }
  } catch (error) {
    authError(res);
  }
}

module.exports = { logoutController };
