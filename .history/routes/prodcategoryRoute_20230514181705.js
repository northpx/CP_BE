const express = require("express");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleWare");
const { createProdCategory } = require("../controller/prodcategoryCtrl");
const router = express.Router();

router.post('/create', authMiddleware, isAdmin, createProdCategory)

module.exports=router;