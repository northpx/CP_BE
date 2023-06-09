const mongoose = require('mongoose'); // Erase if already required

// Declare the Schema of the Mongo model
var productSchema = new mongoose.Schema({
    title:{
        type:String,
        required:true,
        trim: true,
    },
    slug:{
        type:String,
        required:true,
        unique:true,
        lowercase: true,
    },
    description:{
        type:String,
        required:true,
    },
    price:{
        type:Number,
        required:true,
    },
    category: {
        type: String,
        required: true,
    },
    brand:{
        type: String,
        required: true,
    },
    sold: {
        type: Number,
        default: 0,
    },
    quantity: {
        type: Number,
        required: true,
    },
    images: {
        type: Array,
    },
    color: {
        type: String,
        required: true,
    },
    ratings: [{
        star: Number,
        comment: String
        postedby: {type: mongoose.Types.ObjectId, ref: "User"},
    },],
    totalrating: {
        type:String,
        default: 0,
    },
},{
    timestamps: true,
});

//Export the model
module.exports = mongoose.model('Product', productSchema);