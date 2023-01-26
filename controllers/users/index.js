const { registationController } = require("./registrationController");
const { logInController } = require("./logInController");
const { logoutController } = require("./logoutController");
const { checkCurrentUserController } = require("./checkCurrentUserController");
const { avatarChangeController } = require("./avatarChangeController");

module.exports = {
  registationController,
  logInController,
  logoutController,
  checkCurrentUserController,
  avatarChangeController,
};
