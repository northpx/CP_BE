const Category = require("../models/categoryModel")
const asyncHandler = require("express-async-handler")
const validateMongoDbId = require('../utils/validateMongoDb')

const createCategory = asyncHandler(async (req,res)=>{
    try {
        const newCategory = await Category
    } catch (error) {
        throw new Error(error);
    }
})