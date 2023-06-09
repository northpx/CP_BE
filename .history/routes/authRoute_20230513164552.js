const express = require("express");
const { createUser, loginUser, getAllUser, getUser } = require("../controller/userCtrl");

const router = express.Router()

router.post('/register', createUser)
router.post('/login', loginUser)
router.get('/all-users', getAllUser)
router.get('/all-users', getUserUser)


module.exports=router;