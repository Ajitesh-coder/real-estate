const mongoose = require('mongoose');

const brokerSchema = mongoose.Schema({
    id:{
        type:Number
    },
    businessName:{
        type:String,
        required:true
    },
    brokerName:{
        type:String,
        required:true
    },

       location:{
        type:String,
        required:true
       },
       officeLocation:{
        type:String,
        required:true
       },
       previousDeals:{
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

const Broker = mongoose.model("Broker",brokerSchema)

module.exports = Broker;