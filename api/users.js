const express = require("express");
const usersRouter = express.Router();
const jwt = require("jsonwebtoken");
require("dotenv").config();
const { JWT_SECRET="neverTell" } = process.env


module.exports = usersRouter;