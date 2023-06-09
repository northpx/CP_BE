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

})
const getAllBlog = asyncHandler(async (req, res) =>{

})
const deleteBlog = asyncHandler(async (req, res) =>{

})
const updateBlog = asyncHandler(async (req, res) =>{
    const { id } = req.params;
    try {
        const updateBlog = await Blog.findByIdAndUpdate(req.body)
        res.json({
            status: 'success',
            newBlog,
        })
    } catch (error) {
        throw new Error(error)
    }
})

module.exports={createBlog, getAllBlog, getBlog, updateBlog, deleteBlog};