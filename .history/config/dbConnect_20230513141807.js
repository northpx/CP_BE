const {default: mongoose} = require("mongoose")

const dbConnect = () =>{
    try{
        mongoose.connect()
    }
    catch(error){
        throw error;
    }
}