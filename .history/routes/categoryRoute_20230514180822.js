const express = require("express");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleWare");
const router = express.Router();

router.post('/create', authMiddleware, isAdmin, )

module.exports=router;