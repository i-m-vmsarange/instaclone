const express = require("express");
const app = express();
const authRouter = require("../src/routes/auth.route");
const postRouter = require("./routes/post.routes");
const cookieParser = require("cookie-parser");
const cors = require("cors");

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials: true,
  }),
);

app.use(express.json());
app.use(cookieParser());
app.use("/api/auth", authRouter);
app.use("/api/post", postRouter);
module.exports = app;
