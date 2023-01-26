const express = require("express");
const { storage } = require("../../middlewares/avatars/index");
const multer = require("multer");
const router = express.Router();
const { avatarsSaveController } = require("../../controllers/avatars/index");
const uploadMiddleware = multer({ storage });

router.post("/", uploadMiddleware.single("avatar"), async (req, res, next) => {
  avatarsSaveController(req, res, next);
});

module.exports = router;
