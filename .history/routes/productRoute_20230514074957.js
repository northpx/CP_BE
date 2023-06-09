const express = require("express");
const { createProduct } = require("../controller/productCtrl");
const router = express.Router();

router.post('/', createProduct)
router.get('/', createProduct)

module.exports = router