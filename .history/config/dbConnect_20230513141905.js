const {default: mongoose} = require("mongoose")

const dbConnect = () =>{
    try{
        mongoose.connect(process.env.MONGO_URL)
    }
    catch(error){
        throw error;
    }
}