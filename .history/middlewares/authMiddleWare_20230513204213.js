const User = require("../models/userModel")
const jwt = require("jsonwebtoken")
const asyncHandler = require("express-async-handler")

const authMiddleware = asyncHandler(async (req,res,next) =>{
    let token;
    if(req.headers?.authorization?.startsWith('Bearer')){
        token = req.headers.authorization.split(" ")[1]
        try {
            
        } catch (error) {
            throw new Error('Not Authori')
        }
    }
    else{
        throw new Error('There is no token attached to header')
    }
})