const express = require("express");
const { createProduct, getProduct, getAllProduct, updateProduct, deleteProduct } = require("../controller/productCtrl");
const router = express.Router();

router.post('/create', createProduct)
router.get('/:id', getProduct)
router.get('/', getAllProduct)
router.put('/:id', updateProduct)
router.put('/:id', deleteProduct)


module.exports = router