const express = require("express");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleWare");

const router = express.Router();

router.post('/create', crea)

module.exports=router;