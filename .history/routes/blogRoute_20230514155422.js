const express = require("express");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleWare");

const router = express.Router();

module.exports = ro