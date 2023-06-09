const User = require('../models/userModel')
const asyncHandler = require('express-async-handler')
const createUser = asyncHandler();

module.exports={createUser}