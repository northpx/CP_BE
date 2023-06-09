const Product = require("../models/productModel");
const User = require("../models/userModel")
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
    const { id } = req.params
    validateMongodbId(id)
    try {
        if (req.body.title) {
            req.body.slug = slugify(req.body.title)
        }
        const updateProduct = await Product.findByIdAndUpdate(id, req.body, { new: true, });
        console.log(req.body)
        res.json(updateProduct);
    } catch (error) {
        throw new Error(error)
    }
})

const getAllProduct = asyncHandler(async (req, res) => {
    try {
        const queryObj = { ...req.query };
        const excludeFields = ['page', 'sort', 'limit', 'fields']
        excludeFields.forEach((el) => delete queryObj[el])
        let queryStr = JSON.stringify(queryObj)
        queryStr = queryStr.replace(/\b(gte|gt|lte|lt)\b/g, (match) => `$${match}`)

        let query = Product.find(JSON.parse(queryStr))

        //sorting
        if(req.query.sort){
            const sortBy = req.query.sort.split(",").join(" ");
            query = query.sort(sortBy);
        }
        else{
            query = query.sort("-createAt")
        }

        //limiting the field
        if(req.query.fields){
            const fields = req.query.fields.split(",").join(" ");
            query = query.select(fields)
        }
        else{
            query = query.select("-__v");
        }
        
        //pagniation
        const page = (+req.query.page); //page
        const limit = req.query.limit; //perPage
        const skip = (page - 1) * limit;
        query = Product.find().skip(skip).limit(limit);
        if(req.query.page){
            const productCount = await Product.countDocuments();
            if (skip >= productCount) throw new Error("This page does not exists")
        }
        console.log(page, limit, skip)

        const products = await query
        res.json(products);
    } catch (error) {
        throw new Error(error)
    }
})

const deleteProduct = asyncHandler(async (req, res) => {
    const { id } = req.params;
    validateMongodbId(id);
    try {
        const deleteProduct = await Product.findByIdAndDelete(id);
        res.json(deleteProduct);
    } catch (error) {
        throw new Error(error);
    }
});

const addToWishlist = asyncHandler(async (req,res) =>{
    const { _id } = req.user;
    const { prodId } = req.body;
    try {
        const user = await User.findById(_id);
        const alreadyAdded = user.wishlist.find((id) => id.toString() === prodId)
        if(alreadyAdded){
            let user = await User.findOneAndUpdate(_id, {
                $pull: {wishlist: prodId},
            },{
                new: true,
            });
            res.json(user)
        }
        else{
            let user = await User.findOneAndUpdate(_id, {
                $push: {wishlist: prodId},
            },{
                new: true,
            });
            res.json(user)
        }
    } catch (error) {
        throw new Error(error);
    }
});

const rating = asyncHandler(async (req,res) =>{
    const { _id } = req.user;
    const { star, prodId} = req.body;
    const product = await Product.fin
})

module.exports = { createProduct, getProduct, updateProduct, getAllProduct, deleteProduct, addToWishlist, rating }
