const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler")

const createProduct = asyncHandler(async (req,res) =>{
    try {
        const newProduct = await Product.create(req.body);
        res.json(newProduct);
    } catch (error) {
        throw new Error(error)
    }

})

const getProduct = asyncHandler(async (req, res) =>{})
const getProduct = asyncHandler(async (req, res) =>{})
const getProduct = asyncHandler(async (req, res) =>{})
const getProduct = asyncHandler(async (req, res) =>{})
const getProduct = asyncHandler(async (req, res) =>{})
const getProduct = asyncHandler(async (req, res) =>{})

module.exports={createProduct}
