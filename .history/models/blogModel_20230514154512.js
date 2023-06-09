const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var blogSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
    },
    description:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true,
    },
    numOfViews:{
        type:String,
        default:0,
    },
    isLiked: {
        type: Boolean,
        default: f
    }
});

//Export the model
module.exports = mongoose.model('Blog', blogSchema);