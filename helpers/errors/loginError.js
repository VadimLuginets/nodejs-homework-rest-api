function loginError(res) {
  return res.status(401).json({
    message: "Email or password is wrong",
  });
}

module.exports = {
  loginError,
};
