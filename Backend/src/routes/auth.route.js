const express = require("express");
const authController = require("../controllers/auth.controller");
const authRouter = express.Router();
const identifyUser = require("../middlewares/auth.middleware");

authRouter.post("/register", authController.registerUser);
authRouter.post("/login", authController.loginUser);
authRouter.get("/getMe", identifyUser, authController.getUser);

module.exports = authRouter;
