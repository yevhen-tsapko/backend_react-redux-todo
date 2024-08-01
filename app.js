const express = require("express");
const logger = require("morgan");
const cors = require("cors");
const authRouter = require("./routes/api/auth");

const app = express();

const formatsLogger = app.get("env") === "development" ? "dev" : "short";
app.use(logger(formatsLogger));

app.use(cors());
app.use(express.json());

app.use("api/auth", authRouter);
module.exports = app;
