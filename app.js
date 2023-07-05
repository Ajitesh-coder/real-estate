const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const User = require("./models/user")
const Broker = require("./models/broker")
const mongoose = require("mongoose")
const serverless = require('serverless-http');
const { render } = require('ejs');
const PORT = process.env.PORT || 8000

require('./db/conn')
const app = express();
var inputs = [];

 
app.set('view engine','ejs');

app.use(express.json());

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:false}))



    
    app.get("/",(req,res)=>{ 
        res.render("main")
    })

    app.get("/aboutus",(req,res)=>{ 
        res.render("aboutus")
    })

 app.post('/client',async(req,res)=>{
   try{
        // res.send(req.body)
       const userData = new User({
           clientName:req.body.clientName,
           propertyChoice:req.body.propertyChoice,
           location:req.body.location,
           particularLocation:req.body.particularLocation,
           budget:req.body.budget,
           phone:req.body.phone,
           email:req.body.email,
           description: req.body.description,
           id:req.body.id,
    });

       
     
      await userData.save();

 
     
       res.status(201).render("welcome");
     
   }         catch(error){
   res.status(500).send(error)
 }

//     User.find({}).then((err,foundItems)=>{
//         console.log(foundItems);
// })

// console.log(User.find());
// console.log(User.findById({id:fetchid}));
// console.log(User.find({}));

})

app.post('/broker',async(req,res)=>{
    try{
        //  res.send(req.body)
        const brokerData = new Broker({
          
            businessName:req.body.businessName,
            brokerName:req.body.brokerName,
            location:req.body.location,
            officeLocation:req.body.officeLocation,
            previousDeals:req.body.previousDeals,
            phone:req.body.phone,
            email:req.body.email,
            description: req.body.description,
            id:req.body.id,
     });

//        console.log(brokerData);
     
       await brokerData.save();

 
     
        res.status(201).render("welcome");
     
    }         catch(error){
        res.status(500).send(error)
    }

})


const date = new Date();
var weekday ;

if(date.getDay()==0)weekday="Sunday"
else if(date.getDay()==1)weekday="Monday"
else if(date.getDay()==2)weekday="Tuesday"
else if(date.getDay()==3)weekday="Wedday"
else if(date.getDay()==4)weekday="Thrusday"
else if(date.getDay()==5)weekday="Friday"
else if(date.getDay()==6)weekday="Saturday"

// app.get("/client17",(req,res)=>{
     //     fetchid = req.params.id;
     //   console.log(User.findById({id:fetchid}));
    //   res.send(User.find({}));
 

  
//     User.find().then((result)=>{
        
//         // result.forEach((data)=>{

//            result.reverse();
//             res.render("crm",{kindOfDay:weekday,Hours:date.getDate(),Min:date.getMonth(),Sec:date.getFullYear(),record:result});
            
//             // res.send(data.clientName + " ");
//         // })
//     }).catch((err)=>{
//         console.log(err);
//     })
//      })

//      app.post("/client17/search/",(req,res)=>{

//         let value = req.body.value;
//         let data = [];
//         User.find({$or: [
//             {location: {$regex: new RegExp(value, "i")} },
//            {clientName: {$regex: new RegExp(value, "i")}},
//            {phone: {$regex: new RegExp(value, "i")}}

//         ]}).then((result)=>{
        
//             // result.forEach((data)=>{
//                result.reverse();
//                res.render("crm",{kindOfDay:weekday,Hours:date.getDate(),Min:date.getMonth(),Sec:date.getFullYear(),record:result});
//                // res.send(data.clientName + " ");
//                // })
//             }).catch((err)=>{
//                 console.log(err);
//             })

//      })


// app.get("/crm",(req,res)=>{

// })

app.listen(PORT,(req,res)=>{
    console.log(`Server Is Running On ${PORT}`);
})
