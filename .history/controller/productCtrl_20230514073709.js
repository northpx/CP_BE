const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler")

const createProduct = asyncHandler(async (req,res) =>{
    try {
        
    } catch (error) {
        throw new Error(error)
    }
    res.json({
        message: 'hey bro'
    })
})

module.exports={createProduct}
