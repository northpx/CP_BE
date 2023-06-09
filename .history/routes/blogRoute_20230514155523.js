const express = require("express");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleWare");
const { createBlog } = require("../controller/blogCtrl");

const router = express.Router();

router.post('/create', createBlog);

module.exports=router;