const express = require("express");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleWare");
const { createBlog, getBlog, getAllBlog } = require("../controller/blogCtrl");

const router = express.Router();

router.post('/create', authMiddleware, isAdmin, createBlog);
router.put('/update-blog/:id', authMiddleware, isAdmin, createBlog);
router.get('/:id',getBlog);
router.get('/',getAllBlogBlog);

module.exports=router;