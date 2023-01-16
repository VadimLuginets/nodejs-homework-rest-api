const { registration } = require("../../db/auth/index");
const { post } = require("../../schemas/auth/index");

async function registationController(req, res) {
  const { email, password } = req.body;
  try {
    const isValidData = post.validate(req.body);
    if (isValidData.error) {
      res.status(400).json({ msg: "Validation error" });
      return;
    }
    await registration(email, password);
    res.json({ status: "success" });
  } catch (error) {
    res.json({
      status: `Email ${email} is already uses`,
    });
  }
}

module.exports = { registationController };
