const express = require("express");
const router = express.Router();
const {
  registationController,
  logInController,
  logoutController,
  checkCurrentUserController,
} = require("../../controllers/users/index");

router.post("/login", async (req, res, next) => {
  logInController(req, res, next);
});

router.post("/signup", async (req, res, next) => {
  registationController(req, res, next);
});

router.get("/logout", async (req, res, next) => {
  logoutController(req, res, next);
});

router.get("/current", async (req, res, next) => {
  checkCurrentUserController(req, res, next);
});

module.exports = router;
