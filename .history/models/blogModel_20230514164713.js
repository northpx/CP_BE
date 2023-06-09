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
        type: Number,
        default:0,
    },
    isLiked: {
        type: Boolean,
        default: false,
    },
    isDisliked: {
        type: Boolean,
        default: false,
    },
    likes: [{
        type: mongoose.Types.ObjectId,
        ref: "User",
    },],
    dislikes: [{
        type: mongoose.Types.ObjectId,
        ref: "User",
    },],
    image: {
        type: String,
        default: "https://tenten.vn/tin-tuc/wp-content/uploads/2021/09/blog-la-gi-4.jpg"
    },
    author: {
        type: String,
        default: "Admin",
    },
},{
    toJSON: {
        virtuals: true,
    },
    toObject: {
        virtuals: true,
    },
    timestamps: true,
});

//Export the model
module.exports = mongoose.model('Blog', blogSchema);