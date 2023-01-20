const { registationController } = require("./registrationController");
const { logInController } = require("./logInController");
const { logoutController } = require("./logoutController");
const { checkCurrentUserController } = require("./checkCurrentUserController");

module.exports = {
  registationController,
  logInController,
  logoutController,
  checkCurrentUserController,
};
