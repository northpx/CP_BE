const express = require("express");
const { uploadImages, deleteImages } = require("../controller/uploadCtrl");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleWare");
const { uploadPhoto, productImgResize } = require("../middlewares/multerImg");
const router = express.Router();

router.post('/', authMiddleware, isAdmin, uploadPhoto.array('image', 10), productImgResize, uploadImages)
router.delete('/delete-img/:id', authMiddleware, isAdmin, deleteImages)

module.exports = router