const User = require('../models/userModel')

const createUser = async (req,res) =>{
    const email = req.body.email;
    const findUser = await User.findOne(email)
    if(!findUser){
        const newUser = User.create(req.body)
        res.json(newUser)
    }
    else{
        res.json({
            msg: "User already"
        })
    }
}