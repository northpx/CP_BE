const { generateToken } = require('../config/jwtToken');
const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')
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
    if(findUser && await findUser.isPasswordMatched(password)){
        res.json({
            _id: findUser?._id,
            firstname: findUser?.firstname,
            lastname: findUser?.lastname,
            email: findUser?.email,
            mobile: findUser?.mobile,
            token: generateToken(findUser?._id)
        })
    }
    else{
        throw new Error('Invalid Credentials')
    }
});

const updateUser = asyncHandler(async (req,res) =>{
    const { _id } = req.user;
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
    try {
        const block = await User.findByIdAndUpdate(id, {
            isBlocked: true,
        },{
            new: true,
        })
        res.json()
    } catch (error) {
        throw new Error(error)
    }
})
const unblockUser = asyncHandler(async (req, res) =>{})


module.exports = { createUser, loginUser, getAllUser, getUser, deleteUser, updateUser, blockUser, unblockUser}