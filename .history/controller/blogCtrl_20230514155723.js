const Blog = require('../models/blogModel')
const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')
const validateMongoDbId = require('../utils/validateMongoDb')

const createBlog = asyncHandler(async (req, res) =>{
    
})
const getBlog = asyncHandler(async (req, res) =>{

})
const getAllBlog = asyncHandler(async (req, res) =>{

})
const deleteBlog = asyncHandler(async (req, res) =>{

})
const updateBlog = asyncHandler(async (req, res) =>{

})

module.exports={createBlog, getAllBlog, getBlog, updateBlog, deleteBlog};