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

const loginUserCtrl = asyncHandler(async (req,res) =>{
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

const getAllUser = asyncHandler(async (req,res) =>{
    const getAllUser = await
})


module.exports = { createUser, loginUserCtrl}