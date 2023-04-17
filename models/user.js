const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    id:{
        type:Number
    },
    clientName:{
        type:String,
        require:true
    },
    propertyChoice:{
        type:String,
        required:true,

        },
 
       location:{
        type:String,
        required:true
       },

       budget:{
        type:String,
        required:true
       },
       phone:{
        type:String,
        required:true
       } ,
       email:{
        type:String,
        required:true
       } ,
       date:{
        type:Date,
        default:Date.now
       }
})

const User = mongoose.model("User",userSchema)

module.exports = User;
