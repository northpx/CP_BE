const { generateToken } = require('../config/jwtToken');
const User = require('../models/userModel')
const asyncHandler = require('express-async-handler');
const validateMongodbId = require('../utils/validateMongoDb');
const { generateRefreshToken } = require('../config/refreshToken');

const createUser = asyncHandler(async (req, res) => {
    const email = req.body.email;
    const findUser = await User.findOne({ email: email })
    if (!findUser) {
        const newUser = await User.create(req.body)
        res.json(newUser)
    }
    else {
        throw new Error('User Already Exists!')
    }
});

const loginUser = asyncHandler(async (req,res) =>{
    const {email, password} = req.body
    // console.log({email, password})
    const findUser = await User.findOne({email});
    if(findUser && (await findUser.isPasswordMatched(password))){
        const refreshToken = await generateRefreshToken(findUser?._id);
        const updateuser = await User.findByIdAndUpdate(findUser.id, {
            refreshToken: refreshToken,
        },{
            new: true,
        })
        res.json({
            _id: findUser?._id,
            firstname: findUser?.firstname,
            lastname: findUser?.lastname,
            email: findUser?.email,
            mobile: findUser?.mobile,
            token: generateToken(findUser?._id),
        })
    }
    else{
        throw new Error('Invalid Credentials')
    }
});

const updateUser = asyncHandler(async (req,res) =>{
    const { _id } = req.user;
    validateMongodbId(_id);
    try{
        const updateuser = await User.findByIdAndUpdate( _id, {
            firstname: req.body?.firstname,
            lastname: req.body?.lastname,
            email:req.body?.email,
            mobile:req.body?.mobile
        },{
            new: true
        });
        res.json(updateuser)
    }
    catch(error){
        throw new Error(error);
    }
})

const getAllUser = asyncHandler(async (req,res) =>{
    try {
        const getUsers = await User.find()
        res.json(getUsers)
    } catch (error) {
        throw new Error(error)
    }
})

const getUser = asyncHandler(async (req,res) =>{
    const {id} = req.params;
    validateMongodbId(id);
    try {
        const getAUser = await User.findById(id)
        res.json({
            getAUser
        })
    } catch (error) {
        throw new Error(error)
    }
})

const deleteUser = asyncHandler(async (req,res) =>{
    const {id} = req.params;
    validateMongodbId(id);
    try {
        const deleteuser = await User.findByIdAndDelete(id)
        res.json({
            deleteuser
        })
    } catch (error) {
        throw new Error(error)
    }
})

const blockUser = asyncHandler(async (req, res) =>{
    const { id } = req.params;
    validateMongodbId(id);
    try {
        const block = await User.findByIdAndUpdate(id, {
            isBlocked: true,
        },{
            new: true,
        })
        res.json(block)
    } catch (error) {
        throw new Error(error)
    }
})
const unblockUser = asyncHandler(async (req, res) =>{
    const { id } = req.params;
    validateMongodbId(id);
    try {
        const unblock = await User.findByIdAndUpdate(id, {
            isBlocked: false,
        },{
            new: true,
        })
        res.json(unblock)
    } catch (error) {
        throw new Error(error)
    }
})


module.exports = { createUser, loginUser, getAllUser, getUser, deleteUser, updateUser, blockUser, unblockUser}