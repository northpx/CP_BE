const Category = require("../models/prodcategoryModel")
const asyncHandler = require("express-async-handler")
const validateMongoDbId = require('../utils/validateMongoDb')

const createProdCategory = asyncHandler(async (req,res)=>{
    try {
        const newCategory = await Category.create(req.body);
        res.json(newCategory);
    } catch (error) {
        throw new Error(error);
    }
});

module.exports={createProdCategory}