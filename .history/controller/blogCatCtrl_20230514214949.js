const BlogCat = require("../models/blogCatModel")
const asyncHandler = require("express-async-handler")
const validateMongoDbId = require('../utils/validateMongoDb')

const createBlogCat = asyncHandler(async (req,res)=>{
    try {
        const newBlogCat = await BlogCat.create(req.body);
        res.json(newBlogCat);
    } catch (error) {
        throw new Error(error);
    }
})

const updateBlogCat = asyncHandler(async (req,res)=>{
    const { id } = req.params
    validateMongoDbId(id)
    try {
        const updateBlogCat = await Category.findByIdAndUpdate(id, req.body, {new: true,});
        res.json(updateCategory);
    } catch (error) {
        throw new Error(error);
    }
})

const deleteBlogCat = asyncHandler(async (req,res)=>{})

const getBlogCat = asyncHandler(async (req,res)=>{})

const getAllBlogCat = asyncHandler(async (req,res)=>{})

module.exports={createBlogCat, updateBlogCat, deleteBlogCat, getBlogCat, getAllBlogCat};