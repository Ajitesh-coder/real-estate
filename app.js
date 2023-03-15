const express = require('express');
const bodyParser = require('body-parser')
const path = require('path');
const User = require("./models/user")
require('./db/conn')
const app = express();
var inputs = [];

 
app.set('view engine','ejs');

app.use(express.static("public"))
app.use(bodyParser.urlencoded({extended:true}))



    
    app.get("/",(req,res)=>{ 
        res.render("main")
    })

app.post('/client',async(req,res)=>{
    try{
        //  res.send(req.body)
        const userData = User(req.body);
       await userData.save();
        res.status(201).render("main");
        }
        catch(error){
            res.status(500).send(error)
        }
  

})
console.log(User.find({}));
// app.get('/fetch',(req,res)=>{

//   })
// })

// 11e7f180282b7d8a5e4377f1806c1c94-us17

app.listen(5000,(req,res)=>{
    console.log(`Server Is Running On 5000`);
})