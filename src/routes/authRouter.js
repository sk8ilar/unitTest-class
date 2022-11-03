const express = require("express");
const authController = require("../controllers/authController");
const errorHandler = require("../middlewares/errorHandler");

const authRouter = express.Router();

authRouter.get("/signUp", errorHandler(authController.signUp));

module.exports = authRouter;