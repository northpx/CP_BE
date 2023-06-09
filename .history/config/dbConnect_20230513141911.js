const {default: mongoose} = require("mongoose")

const dbConnect = () =>{
    try{
        mongoose.connect(process.env.MONGO_URL)
        console.log()
    }
    catch(error){
        throw error;
    }
}