const express = require("express")
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleWare");
const { createCoupon, getAllCoupon, updateCoupon, deleteCoupon, getCoupon } = require("../controller/couponCtrl");

const router = express.Router();

router.post('/create', authMiddleware, isAdmin, createCoupon)
router.put('/update/:id', authMiddleware, isAdmin, updateCoupon)
router.delete('/:id', authMiddleware, isAdmin, deleteCoupon)
router.get('/:id', authMiddleware, isAdmin, getCoupon)
router.get('/', authMiddleware, isAdmin, getAllCoupon);

module.exports=router;