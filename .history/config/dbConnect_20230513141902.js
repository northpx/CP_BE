const {default: mongoose} = require("mongoose")

const dbConnect = () =>{
    try{
        mongoose.connect(process.env.MONGO)
    }
    catch(error){
        throw error;
    }
}