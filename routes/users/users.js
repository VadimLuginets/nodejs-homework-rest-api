const express = require("express");
const router = express.Router();
const {
  registationController,
  logInController,
  logoutController,
  checkCurrentUserController,
  avatarChangeController,
} = require("../../controllers/users/index");
const { authMidleWare } = require("../../middlewares/auth/index");

const multer = require("multer");
const path = require("path");
const { User } = require("../../db/models/userModel");
const AVATARS_DIR = path.resolve("./tmp");
const rawAvatar = multer.diskStorage({
  destination: async (req, file, cb) => {
    cb(null, AVATARS_DIR);
  },
  filename: async (req, file, cb) => {
    const [filename, extention] = file.originalname.split(".");
    cb(null, `${req.user._id}.${extention}`);
  },
});

const saveAvatar = multer({ storage: rawAvatar });

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

router.use(authMidleWare);

router.post("/avatars", saveAvatar.single("avatar"), async (req, res, next) => {
  avatarChangeController(req, res, next);
});

module.exports = router;
