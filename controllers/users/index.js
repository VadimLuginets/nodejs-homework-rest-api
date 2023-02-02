const { registationController } = require("./registrationController");
const { logInController } = require("./logInController");
const { logoutController } = require("./logoutController");
const { checkCurrentUserController } = require("./checkCurrentUserController");
const { avatarChangeController } = require("./avatarChangeController");
const { verifyUserController } = require("./verifyUserController");
const {
  resendEmailVerificationController,
} = require("./resendEmailVerificationController");

module.exports = {
  registationController,
  logInController,
  logoutController,
  checkCurrentUserController,
  avatarChangeController,
  verifyUserController,
  resendEmailVerificationController,
};
