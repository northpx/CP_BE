const User = require("../models/userModel")
const jwt = require("jsonwebtoken")
const asyncHandler = require("express-async-handler")

const authMiddleware = asyncHandler(async (req,res,next) =>{
    let token;
    if(req.headers?.authorization?.startsWith('Bearer')){
        token = req.he
    }
    else{
        throw new Error('There is no token attached to header')
    }
})