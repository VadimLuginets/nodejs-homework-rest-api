const gravatar = require("gravatar");

async function generateDefaultAvatar(email) {
  const USER_AVATAR_URL = gravatar.url(email, {
    protocol: "https",
    format: "xml",
  });
  return USER_AVATAR_URL;
}

module.exports = generateDefaultAvatar;
