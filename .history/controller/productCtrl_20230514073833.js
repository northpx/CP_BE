const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler")

const createProduct = asyncHandler(async (req,res) =>{
    try {
        const newProduct = await Product.create(req.body)
        res.json(new)
    } catch (error) {
        throw new Error(error)
    }

})

module.exports={createProduct}
