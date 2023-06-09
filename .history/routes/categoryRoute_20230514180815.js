const express = require("express");
const { authMiddleware } = require("../middlewares/authMiddleWare");
const router = express.Router();

router.post('/create', authMiddleware)

module.exports=router;