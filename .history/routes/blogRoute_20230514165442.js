const express = require("express");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleWare");
const { createBlog, getBlog, getAllBlog, updateBlog } = require("../controller/blogCtrl");

const router = express.Router();

router.post('/create', authMiddleware, isAdmin, createBlog);
router.put('/update-blog/:id', authMiddleware, isAdmin, updateBlog);
router.get('/:id',getBlog);
router.get('/',getAllBlog);
router.delete('/:id',deleAllBlog);
module.exports=router;