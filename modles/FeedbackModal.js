const mongoose= require('mongoose');

const feedbackTemplate= new mongoose.Schema({
    fullname:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true,
        unique:true
    },
    feedback:{
        type:String,
        required:true
    },
    rating:{
        type:Number,
        required:true
    },
    date:{
        type:Date,
        default:Date.now
    }
})

module.exports= mongoose.model('feedbacktable',feedbackTemplate);