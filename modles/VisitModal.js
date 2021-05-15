const mongoose= require('mongoose');

const VisitTemplate= new mongoose.Schema({
 
    visit:{
        type:Number,
        default:0,
        required:true
    },
    un:{
        type:String,
        default:"secretkey"
    }
})

module.exports= mongoose.model('profile_visits',VisitTemplate);