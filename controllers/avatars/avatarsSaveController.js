async function avatarsSaveController(req, res, next) {
  try {
    res.json({ message: "avarsSC" });
  } catch (error) {
    res.status(401).json({ error: "error" });
  }
}

module.exports = { avatarsSaveController };
