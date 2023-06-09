const express = require("express");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleWare");
const { createEnquiry, updateEnquiry, getEnquiry, getAllEnquiry, deleteEnquiry } = require("../controller/enqCtrl");

const router = express.Router();

router.post('/create', createEnquiry)
router.put('/update/:id', authMiddleware, isAdmin, updateEnquiry)
router.get('/:id', getEnquiry)
router.get('/', getAllEnquiry)
router.delete('/:id', authMiddleware, isAdmin, deleteEnquiry)

module.exports=router;