const express = require("express");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleWare");
const { createBlogCat } = require("../controller/blogCatCtrl");

const router = express.Router();

router.post('/create', authMiddleware, isAdmin, createBlogCat)
router.put('/update/:id', authMiddleware, isAdmin, upda)
router.get('/:id', getProdCategory)
router.get('/', getAllProdCategory)
router.delete('/:id', authMiddleware, isAdmin, deleteProdCategory)

module.exports=router;