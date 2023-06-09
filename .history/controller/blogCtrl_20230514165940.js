const Blog = require('../models/blogModel')
const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')
const validateMongoDbId = require('../utils/validateMongoDb')

const createBlog = asyncHandler(async (req, res) =>{
    try {
        const newBlog = await Blog.create(req.body)
        res.json({
            status: 'success',
            newBlog,
        })
    } catch (error) {
        throw new Error(error)
    }
})
const getBlog = asyncHandler(async (req, res) =>{
    const {id} = req.params;
    validateMongoDbId(id);
    try {
        const getBlog = await Blog.findById(id);
        const updateViews = await Blog.findByIdAndUpdate(id, 
            {
                $inc: {numOfViews: 1},
            },
            {
                new: true,
            })
        res.json(updateViews)
    } catch (error) {
        throw new Error(error)
    }
})
const getAllBlog = asyncHandler(async (req, res) =>{
    try {
        const getBlogs = await Blog.find();
        res.json(getBlogs)
    } catch (error) {
        throw new Error(error)
    }
})
const deleteBlog = asyncHandler(async (req, res) =>{
    const { id } = req.params;
    validateMongoDbId(id)
    try {
        const deleteBlog = await Blog.findByIdAndDelete(id);
        res.json({
            status: 'success',
            deleteBlog,
        })
    } catch (error) {
        throw new Error(error)
    }
})
const updateBlog = asyncHandler(async (req, res) =>{
    const { id } = req.params;
    validateMongoDbId(id);
    try {
        const updateBlog = await Blog.findByIdAndUpdate(id, req.body, {new: true,});
        res.json({
            status: 'success',
            updateBlog,
        })
    } catch (error) {
        throw new Error(error)
    }
})

const likeBlog = asyncHandler(async (req, res) =>{
    const { blogId } = req.body;
    validateMongoDbId(blogId)
    const blog = await Blog.findById(blogId)
})

module.exports={createBlog, getAllBlog, getBlog, updateBlog, deleteBlog};