const express = require("express");
const { createProduct, getProduct, getAllProduct, updateProduct, deleteProduct, addToWishlist } = require("../controller/productCtrl");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleWare");
const router = express.Router();

router.post('/create', authMiddleware, isAdmin,createProduct)
router.get('/:id', getProduct)
router.put('/wishlist', authMiddleware, addToWishlist)
router.put('/rating', authMiddleware, addToWishlist)
router.put('/:id', authMiddleware, isAdmin,updateProduct)
router.delete('/:id',authMiddleware, isAdmin,deleteProduct)
router.get('/', getAllProduct)

module.exports = router