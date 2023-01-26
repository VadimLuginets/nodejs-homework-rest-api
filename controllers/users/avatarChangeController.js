const { User } = require("../../db/models/userModel");
const Jimp = require("jimp");
const path = require("path");
const AVATARS_DIR = path.resolve("./tmp");
const AVATARS_250x250 = path.resolve("./public/avatars");
const fs = require("fs");

async function avatarChangeController(req, res, next) {
  try {
    const { _id } = req.user;
    const avatar = await Jimp.read(`${AVATARS_DIR}/${_id}.png`).then(
      (image) => {
        image.resize(250, 250).write(`${AVATARS_250x250}/${_id}_250x250.png`);
      }
    );
    await User.updateOne(
      { _id },
      { avatarURL: `http://localhost:3000/users/avatars/${_id}_250x250.png` }
    );
    res.json({
      avatarURL: `http://localhost:3000/users/avatars/${_id}_250x250.png`,
    });
  } catch (error) {
    console.log(error);
    res.status(401).json({ message: "error" });
  }
}

module.exports = { avatarChangeController };
