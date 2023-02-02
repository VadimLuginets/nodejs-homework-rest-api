const { User } = require("../../db/models/userModel");
async function verifyUserController(req, res, next) {
  try {
    const { verificationToken } = req.params;
    const user = await User.findOne({ verificationToken });
    const { verify } = user;
    if (verify) {
      throw new Error("There is no user with this verificationToken");
    }
    if (!user) {
      console.error("There is no user with this verificationToken");
      throw new Error("There is no user with this verificationToken");
    }
    await User.findOneAndUpdate(
      { verificationToken },
      { verificationToken: null, verify: true }
    );
    res.json({ message: "Verification successful" });
  } catch (error) {
    res.status(404).json({ message: "Not found" });
  }
}
module.exports = { verifyUserController };
