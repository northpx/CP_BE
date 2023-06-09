const express = require("express");
const { createProduct, getProduct, getAllProduct, updateProduct, deleteProduct, addToWishlist, rating } = require("../controller/productCtrl");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleWare");
// const { uploadPhoto, productImgResize } = require("../middlewares/multerImg");
const router = express.Router();

router.post('/create', authMiddleware, isAdmin,createProduct)
router.get('/:id', getProduct)
router.put('/wishlist', authMiddleware, addToWishlist)
router.put('/rating', authMiddleware, rating)
router.put('/:id', authMiddleware, isAdmin,updateProduct)
router.delete('/:id',authMiddleware, isAdmin,deleteProduct)
router.get('/', getAllProduct)
// router.post('/upload/', authMiddleware, isAdmin, uploadPhoto.array('image', 10), productImgResize, uploadImages)
// router.delete('/delete-img/:id', authMiddleware, isAdmin, deleteImages)

module.exports = router