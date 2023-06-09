const Category = require("../models/prodcategoryModel")
const asyncHandler = require("express-async-handler")
const validateMongoDbId = require('../utils/validateMongoDb')

const createProdCategory = asyncHandler(async (req,res)=>{
    try {
        const newCategory = await Category.create(req.body);
        res.json(newCategory);
    } catch (error) {
        throw new Error(error);
    }
});
const updateProdCategory = asyncHandler(async (req,res)=>{
    const { id } = req.params
    validateMongoDbId(id)
    try {
        const updateCategory = await Category.findByIdAndUpdate(id, req.body, {new: true,});
        res.json(updateCategory);
    } catch (error) {
        throw new Error(error);
    }
});

const getProdCategory = asyncHandler(async (req,res)=>{
    const { id } = req.params
    validateMongoDbId(id)
    try {
        const updateCategory = await Category.findByIdAndUpdate(id, req.body, {new: true,});
        res.json(updateCategory);
    } catch (error) {
        throw new Error(error);
    }
});

const getAllProdCategory = asyncHandler(async (req,res)=>{
    try {
        const categories = await Category.find();
        res.json(categories);
    } catch (error) {
        throw new Error(error);
    }
});
const deleteProdCategory = asyncHandler(async (req,res)=>{
    const { id } = req.params
    validateMongoDbId(id)
    try {
        const deleteCategory = await Category.findByIdAndDelete(id);
        res.json(deleteCategory);
    } catch (error) {
        throw new Error(error);
    }
});

module.exports={createProdCategory, updateProdCategory, deleteProdCategory, getProdCategory, getAllProdCategory}