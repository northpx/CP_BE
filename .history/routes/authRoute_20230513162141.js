const express = require("express");
const { createUser, loginUser } = require("../controller/userCtrl");

const router = express.Router()

router.post('/register', createUser)
router.post('/login', loginUser)
router.get('/', loginUser)


module.exports=router;