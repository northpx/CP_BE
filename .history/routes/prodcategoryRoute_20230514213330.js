const express = require("express");
const { authMiddleware, isAdmin } = require("../middlewares/authMiddleWare");
const { createProdCategory, updateProdCategory, getProdCategory, getAllProdCategory, deleteProdCategory } = require("../controller/prodcategoryCtrl");
const router = express.Router();

router.post('/create', authMiddleware, isAdmin, createProdCategory)
router.put('/update/:id', authMiddleware, isAdmin, updateProdCategory)
router.get('/:id', getProdCategory)
router.get('/', getAllProdCategory)
router.delete('/:id', authMiddleware, isAdmin, deleteProdCategory)

module.exports=router;