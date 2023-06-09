const {default: mongoose} = require("mongoose")

const dbConnect = () =>{
    try{
        mongoose.connect(process.env.MONGO_)
    }
    catch(error){
        throw error;
    }
}