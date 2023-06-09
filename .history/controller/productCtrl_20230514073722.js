const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler")

const createProduct = asyncHandler(async (req,res) =>{
    try {
        res.json({
            message: 'hey bro'
        })
    } catch (error) {
        throw new Error(error)
    }

})

module.exports={createProduct}
