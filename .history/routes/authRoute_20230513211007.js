const express = require("express");
const { createUser, loginUser, getAllUser, getUser, deleteUser, updateUser } = require("../controller/userCtrl");
const {authMiddleware, isAdmin} = require("../middlewares/authMiddleWare");

const router = express.Router()

router.post('/register', createUser)
router.post('/login', loginUser)
router.get('/all-users', getAllUser)
router.get('/:id', authMiddleware, isAdmin, getUser)
router.delete('/:id', deleteUser)
router.put('/edit-user',authMiddleware, updateUser)
router.put('/edit-user',authMiddleware, updateUser)
router.put('/edit-user',authMiddleware, updateUser)


module.exports=router;