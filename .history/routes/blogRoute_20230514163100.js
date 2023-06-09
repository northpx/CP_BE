const express = require("express");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleWare");
const { createBlog } = require("../controller/blogCtrl");

const router = express.Router();

router.post('/create', authMiddleware, isAdmin, createBlog);
router.put('/update-blog/:id', authMiddleware, isAdmin, createBlog);
router.get('/:id', authMiddleware, isAdmin, createBlog);

module.exports=router;