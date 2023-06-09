const express = require("express");
const { createProduct, getProduct, getAllProduct } = require("../controller/productCtrl");
const router = express.Router();

router.post('/create', createProduct)
router.get('/:id', getProduct)
router.get('/', getAllProduct)
router.put('/', getAllProduct)

module.exports = router