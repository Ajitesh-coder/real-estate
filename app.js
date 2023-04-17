const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const User = require("./models/user")
const mongoose = require("mongoose")

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

    

app.post('/',async(req,res)=>{
    try{
        //  res.send(req.body)
        const userData = new User({
            clientName:req.body.clientName,
            propertyChoice:req.body.propertyChoice,
            location:req.body.location,
            budget:req.body.budget,
            phone:req.body.phone,
            email:req.body.email,
            id:req.body.id,
     });

       
     if(userData.location=="Chandigarh"){
       await userData.save();
     }
     
        res.status(201).render("main");
     
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


app.get("/client17",(req,res)=>{
    //     fetchid = req.params.id;
    //   console.log(User.findById({id:fetchid}));
    //   res.send(User.find({}));
 

  
    User.find().then((result)=>{
        
        // result.forEach((data)=>{
           result.reverse();
            res.render("crm",{kindOfDay:"Monday",record:result});
            
            // res.send(data.clientName + " ");
        // })
    }).catch((err)=>{
        console.log(err);
    })
     })

     app.post("/client17/search/",(req,res)=>{

        let value = req.body.value;
        let data = [];
        User.find({$or: [
            {location: {$regex: new RegExp(value, "i")} },
           {clientName: {$regex: new RegExp(value, "i")}},
           {phone: {$regex: new RegExp(value, "i")}}

        ]}).then((result)=>{
        
            // result.forEach((data)=>{
                console.log(result);
               result.reverse();
               res.render("crm",{kindOfDay:"Monday",record:result});
               // res.send(data.clientName + " ");
               // })
            }).catch((err)=>{
                console.log(err);
            })

     })


// app.get("/crm",(req,res)=>{

// })

app.listen(5000,(req,res)=>{
    console.log(`Server Is Running On 5000`);
})