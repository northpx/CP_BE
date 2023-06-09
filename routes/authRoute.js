const express = require("express");
const { createUser, loginUser, getAllUser, getUser, deleteUser, updateUser, blockUser, unblockUser, handleRefreshToken, logOut, updatePassword, forgotPasswordToken, resetPassword, loginAdmin, getWishlist, saveAddress, userCart, getUserCart, createOrder, removeProdFromCart, updateProdQuantityFromCart, getMyOrders, getOrders } = require("../controller/userCtrl");
const {authMiddleware, isAdmin} = require("../middlewares/authMiddleWare");
const { checkout, paymentVerification } = require("../controller/paymentCtrl");

const router = express.Router()

router.post('/register', createUser)
router.post('/forgot-password-token', forgotPasswordToken)
router.put('/reset-password/:token', resetPassword)
router.put('/password', authMiddleware,updatePassword)

router.post('/login', loginUser)
router.post('/admin-login', loginAdmin)
router.post('/cart', authMiddleware, userCart)
router.post('/order/checkout', authMiddleware, checkout)
router.post('/order/paymentVerification', authMiddleware, paymentVerification)
// router.post('/cart/applycoupon', authMiddleware, applyCoupon)
router.post('/cart/cash-order', authMiddleware, createOrder)

router.get('/all-users', getAllUser)
router.get('/getorders', authMiddleware, getMyOrders)
router.get('/get-orders',authMiddleware,isAdmin, getOrders)
// router.put('/order/update-order/:id', authMiddleware, isAdmin, updateOrderStatus)
router.get('/refresh', handleRefreshToken)
router.get('/logout', logOut)
router.get('/getwishlist', authMiddleware, getWishlist)
router.get('/cart', authMiddleware, getUserCart)

router.get('/:id', authMiddleware, isAdmin, getUser)
// router.delete('/empty-cart', authMiddleware, emptyCart)
router.delete('/delete-product-cart/:cartItemId', authMiddleware, removeProdFromCart)
router.delete('/update-product-cart/:cartItemId/:newQuantity', authMiddleware, updateProdQuantityFromCart)
router.delete('/:id', deleteUser)

router.put('/edit-user',authMiddleware, updateUser)
router.put('/save-address', authMiddleware, saveAddress)
router.put('/block-user/:id',authMiddleware, isAdmin, blockUser)
router.put('/unblock-user/:id',authMiddleware, isAdmin, unblockUser)


module.exports=router;