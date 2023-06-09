const express = require("express");
const { isAdmin, authMiddleware } = require("../middlewares/authMiddleWare");

const router = express.Router();

router.post('/create', authMiddleware, isAdmin, cre)
router.put('/update/:id', authMiddleware, isAdmin, updateProdCategory)
router.get('/:id', getProdCategory)
router.get('/', getAllProdCategory)
router.delete('/:id', authMiddleware, isAdmin, deleteProdCategory)

module.exports=router;