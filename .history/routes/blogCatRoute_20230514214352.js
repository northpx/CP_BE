const express = require("express");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleWare");
const { createBlogCat, updateBlogCat, getBlogCat, getAllBlogCat, deleteBlogCat } = require("../controller/blogCatCtrl");

const router = express.Router();

router.post('/create', authMiddleware, isAdmin, createBlogCat)
router.put('/update/:id', authMiddleware, isAdmin, updateBlogCat)
router.get('/:id', getBlogCat)
router.get('/', getAllBlogCat)
router.delete('/:id', authMiddleware, isAdmin, deleteBlogCat)

module.exports=router;