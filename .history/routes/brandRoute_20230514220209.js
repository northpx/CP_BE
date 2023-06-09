const express = require("express");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleWare");
const { createBrand, updateBrand, getBrand, getAllBrand, deleteBrand } = require("../controller/BrandCtrl");

const router = express.Router();

router.post('/create', authMiddleware, isAdmin, createBrand)
router.put('/update/:id', authMiddleware, isAdmin, updateBrand)
router.get('/:id', getBrand)
router.get('/', getAllBrand)
router.delete('/:id', authMiddleware, isAdmin, deleteBrand)

module.exports=router;