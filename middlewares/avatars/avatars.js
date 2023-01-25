const multer = require("multer");
const path = require("path");
const { uuid } = require("uuidv4");
const AVATARS_DIR = path.resolve("./public/avatars");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, AVATARS_DIR);
  },
  filename: (req, file, cb) => {
    const [filename, extention] = file.originalname.split(".");
    cb(null, `${uuid()}.${extention}`);
  },
});

module.exports = { storage };
