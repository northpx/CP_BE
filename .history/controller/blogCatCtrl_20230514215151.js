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
        const updateBlogCat = await BlogCat.findByIdAndUpdate(id, req.body, {new: true,});
        res.json(updateBlogCat);
    } catch (error) {
        throw new Error(error);
    }
})

const deleteBlogCat = asyncHandler(async (req,res)=>{
    const { id } = req.params
    validateMongoDbId(id)
    try {
        const deleteBlogCat = await BlogCat.findByIdAndDelete(id);
        res.json(deleteBlogCat);
    } catch (error) {
        throw new Error(error);
    }
})

const getBlogCat = asyncHandler(async (req,res)=>{
    const { id } = req.params
    validateMongoDbId(id)
    try {
        const blogCat = await BlogCat.findById(id);
        res.json(blogCat);
    } catch (error) {
        throw new Error(error);
    }
})

const getAllBlogCat = asyncHandler(async (req,res)=>{
    try {
        const blogCats = await Category.find();
        res.json(categories);
    } catch (error) {
        throw new Error(error);
    }
})

module.exports={createBlogCat, updateBlogCat, deleteBlogCat, getBlogCat, getAllBlogCat};