const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const path = require("path");
const AVATARS_DIR = path.resolve("./public/avatars");

const contactsRouter = require("./routes/api/contacts");
const authRouter = require("./routes/users/users");
const avatarsRouter = require("./routes/avatars/avatars");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";

app.use(logger(formatsLogger));
app.use(cors());
app.use(express.json());

app.use("/api/contacts", contactsRouter);
app.use("/users", authRouter);
app.use("/avatars", express.static(AVATARS_DIR), avatarsRouter);

app.use((req, res) => {
  res.status(404).json({ message: "Not found" });
});

app.use((err, req, res, next) => {
  res.status(500).json({ message: err.message });
});

module.exports = app;
