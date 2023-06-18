const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    id:{
        type:Number
    },
    clientName:{
        type:String,
    },
    // properties: [
    //      {
    //         type: mongoose.Schema.Types.ObjectId,
    //         ref: 'properties',

    //     }
    // ],
    propertyChoice:{
        type:String,

        },
 
       location:{
        type:String,
       },
       particularLocation:{
        type:String,

       },
       budget:{
        type:Number,
     
       },
       phone:{
        type:Number,
        required:true
       } ,
       email:{
        type:String,
       } ,
       description:{
        type:String
       },
       date:{
        type:Date,
        default:Date.now
       }
})

const User = mongoose.model("User",userSchema)

module.exports = User;
