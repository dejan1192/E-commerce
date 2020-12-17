const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const reviewSchema = new Schema({

    name:{
        type:String,
        required:true
    },
    rating:{
        type:String,
        required:true
    },
    comment:{
        type:String,
        required:true
    }

},{
    timestamps:true
});


const productSchema = new Schema({

    user:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:'User'
    },
    name:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    brand:{
        type:String,
        required:true,
    },
    category:{
        type:String,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    reviews:[reviewSchema],
    rating:{
        type:Number,
        requided:true,
        default:0
    },
    numReviews:{
        type:Number,
        requided:true,
        default:0
    },
    price:{
        type:Number,
        requided:true,
        default:0
    },
    countInStock:{
        type:Number,
        requided:true,
        default:0
    },

},{
    timestamps:true
});


module.exports = mongoose.model('product', productSchema);