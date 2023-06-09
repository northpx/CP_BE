const express = require("express");
const { createUser, loginUser, getAllUser, getUser, deleteUser, updateUser, blockUser, unblockUser, handleRefreshToken, logOut, updatePassword, forgotPasswordToken } = require("../controller/userCtrl");
const {authMiddleware, isAdmin} = require("../middlewares/authMiddleWare");

const router = express.Router()

router.post('/register', createUser)
router.post('/forgot-password-token', forgotPasswordToken)
router.post('/reset-password', forgotPasswordToken)
router.put('/password', authMiddleware,updatePassword)
router.post('/login', loginUser)
router.get('/all-users', getAllUser)
router.get('/refresh', handleRefreshToken)
router.get('/logout', logOut)
router.get('/:id', authMiddleware, isAdmin, getUser)
router.delete('/:id', deleteUser)
router.put('/edit-user',authMiddleware, updateUser)
router.put('/block-user/:id',authMiddleware, isAdmin, blockUser)
router.put('/unblock-user/:id',authMiddleware, isAdmin, unblockUser)



module.exports=router;