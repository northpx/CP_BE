const express = require("express");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleWare");
const { createCategory } = require("../controller/categoryCtrl");
const router = express.Router();

router.post('/create', authMiddleware, isAdmin, createCategory)

module.exports=router;