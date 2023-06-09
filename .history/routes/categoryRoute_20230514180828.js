const express = require("express");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleWare");
const { createProduct } = require("../controller/productCtrl");
const router = express.Router();

router.post('/create', authMiddleware, isAdmin, createProduct)

module.exports=router;