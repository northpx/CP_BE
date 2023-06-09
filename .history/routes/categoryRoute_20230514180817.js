const express = require("express");
const { authMiddleware } = require("../middlewares/authMiddleWare");
const router = express.Router();

router.post('/create', authMiddleware, is)

module.exports=router;