const express = require("express");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleWare");
const { createBlog, getBlog, getAllBlog, updateBlog, deleteBlog, likeBlog, dislikeBlog, uploadImages } = require("../controller/blogCtrl");
const { uploadPhoto, blogImgResize } = require("../middlewares/multerImg");

const router = express.Router();

router.post('/create', authMiddleware, isAdmin, createBlog);
router.put('/update-blog/:id', authMiddleware, isAdmin, updateBlog);
router.get('/:id',getBlog);
router.get('/',getAllBlog);
router.delete('/:id', authMiddleware, isAdmin,deleteBlog);
router.put('/likes',authMiddleware, likeBlog)
router.put('/dislikes',authMiddleware, dislikeBlog)
router.post('/upload/:id', authMiddleware, isAdmin, uploadPhoto.array('image', 2), blogImgResize, uploadImages)


module.exports=router;