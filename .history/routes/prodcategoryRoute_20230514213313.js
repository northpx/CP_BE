const express = require("express");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleWare");
const { createProdCategory, updateProdCategory, getProdCategory } = require("../controller/prodcategoryCtrl");
const router = express.Router();

router.post('/create', authMiddleware, isAdmin, createProdCategory)
router.put('/update/:id', authMiddleware, isAdmin, updateProdCategory)
router.get('/:id', authMiddleware, isAdmin, getProdCategory)
router.get('/', get)
router.delete('/:id', authMiddleware, isAdmin, updateProdCategory)

module.exports=router;