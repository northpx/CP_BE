const express = require("express");
const { createProduct, getProduct, getAllProduct, updateProduct, deleteProduct } = require("../controller/productCtrl");
const { isAdmin } = require("../middlewares/authMiddleWare");
const router = express.Router();

router.post('/create', isAdmin, authcreateProduct)
router.get('/:id', getProduct)
router.put('/:id', updateProduct)
router.delete('/:id', deleteProduct)
router.get('/', getAllProduct)

module.exports = router