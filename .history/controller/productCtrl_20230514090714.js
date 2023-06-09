const Product = require("../models/productModel");
const asyncHandler = require("express-async-handler")
const slugify = require("slugify");
const validateMongodbId = require("../utils/validateMongoDb");

const createProduct = asyncHandler(async (req, res) => {
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title)
        }
        const newProduct = await Product.create(req.body);
        res.json(newProduct);
    } catch (error) {
        throw new Error(error)
    }

})

const getProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
    try {
        const findProduct = await Product.findById(id);
        res.json(findProduct)
    } catch (error) {
        throw new Error(error)
    }
})

const updateProduct = asyncHandler(async (req, res) => {
    const id = req.params
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title)
        }
        const updateProduct = await Product.findOneAndUpdate({ id }, req.body, { new: true, });
        console.log(req.body)
        res.json(updateProduct);
    } catch (error) {
        throw new Error(error)
    }
})

const getAllProduct = asyncHandler(async (req, res) => {
    try {
        const getProducts = await Product.find()
        res.json(getProducts);
    } catch (error) {
        throw new Error(error)
    }
})

const deleteProduct = asyncHandler(async (req, res) => {
    const id = req.params;
    validateMongodbId(id);
    try {
        const deleteProduct = await Product.findByIdAndDeleteAndDelete(id);
        res.json(deleteProduct);
    } catch (error) {
        throw new Error(error);
    }
});




module.exports = { createProduct, getProduct, updateProduct, getAllProduct, deleteProduct }
