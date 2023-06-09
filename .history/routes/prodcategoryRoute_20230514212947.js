const express = require("express");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleWare");
const { createProdCategory, updateProdCategory } = require("../controller/prodcategoryCtrl");
const router = express.Router();

router.post('/create', authMiddleware, isAdmin, createProdCategory)
router.put('/update/:id', authMiddleware, isAdmin, updateProdCategory)
router.get('/update/:id', authMiddleware, isAdmin, updateProdCategory)
router.get('/update/:id', authMiddleware, isAdmin, updateProdCategory)
router.put('/update/:id', authMiddleware, isAdmin, updateProdCategory)

module.exports=router;