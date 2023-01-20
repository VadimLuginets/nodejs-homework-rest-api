function authError(res) {
  return res.status(401).json({
    message: "Authorization error",
  });
}

module.exports = {
  authError,
};
