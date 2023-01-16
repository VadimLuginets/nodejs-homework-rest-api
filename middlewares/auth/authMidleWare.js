const jwt = require("jsonwebtoken");
const { authError } = require("../../helpers/errors/index");
const { secret } = require("../../helpers/secret/index");

function authMidleWare(req, res, next) {
  try {
    const [tokenType, token] = req.headers["authorization"].split(" ");

    if (!token) {
      next(authError(res));
    }

    const user = jwt.decode(token, secret);

    req.token = token;
    req.user = user;

    next();
  } catch (error) {
    next(authError(res));
  }
}

module.exports = { authMidleWare };
