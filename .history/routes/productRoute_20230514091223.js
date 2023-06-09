const express = require("express");
const { createProduct, getProduct, getAllProduct, updateProduct, deleteProduct } = require("../controller/productCtrl");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleWare");
const router = express.Router();

router.post('/create', isAdmin, authMiddleware,createProduct)
router.get('/:id', getProduct)
router.put('/:id',isAdmin, authMiddleware, updateProduct)
router.delete('/:id', deleteProduct)
router.get('/', getAllProduct)

module.exports = router