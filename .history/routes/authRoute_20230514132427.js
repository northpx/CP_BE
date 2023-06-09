const express = require("express");
const { createUser, loginUser, getAllUser, getUser, deleteUser, updateUser, blockUser, unblockUser, handleRefreshToken, logOut } = require("../controller/userCtrl");
const {authMiddleware, isAdmin} = require("../middlewares/authMiddleWare");

const router = express.Router()

router.post('/register', createUser)
router.put('/password', )
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