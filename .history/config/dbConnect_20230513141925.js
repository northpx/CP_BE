const {default: mongoose} = require("mongoose")

const dbConnect = () =>{
    try{
        mongoose.connect(process.env.MONGO_URL)
        console.log("Connect success")
    }
    catch(error){
        throw error;
    }
}

