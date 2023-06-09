const express = require("express");
const { createUser, loginUser, getAllUser, getUser, deleteUser, updateUser } = require("../controller/userCtrl");

const router = express.Router()

router.post('/register', createUser)
router.post('/login', loginUser)
router.get('/all-users', getAllUser)
router.get('/:id', getUser)
router.delete('/:id', deleteUser)
router.delete('/:id', updateUser)


module.exports=router;