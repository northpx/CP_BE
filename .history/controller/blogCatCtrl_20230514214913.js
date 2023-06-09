const BlogCat = require("../models/blogCatModel")
const asyncHandler = require("express-async-handler")
const validateMongoDbId = require('../utils/validateMongoDb')

const createBlogCat = asyncHandler(async (req,res)=>{
    try {
        const newBlogCat = await BlogCat.create(req.body);
        res.json(new);
    } catch (error) {
        throw new Error(error);
    }
})

const updateBlogCat = asyncHandler(async (req,res)=>{})

const deleteBlogCat = asyncHandler(async (req,res)=>{})

const getBlogCat = asyncHandler(async (req,res)=>{})

const getAllBlogCat = asyncHandler(async (req,res)=>{})

module.exports={createBlogCat, updateBlogCat, deleteBlogCat, getBlogCat, getAllBlogCat};