const express = require("express");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleWare");
const { createColor, updateColor, getColor, getAllColor, deleteColor } = require("../controller/colorCtrl");

const router = express.Router();

router.post('/create', authMiddleware, isAdmin, createColor)
router.put('/update/:id', authMiddleware, isAdmin, updateColor)
router.get('/:id', getColor)
router.get('/', getAllColor)
router.delete('/:id', authMiddleware, isAdmin, deleteColor)

module.exports=router;