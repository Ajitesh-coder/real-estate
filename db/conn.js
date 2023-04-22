const mongoose = require("mongoose")

// creating a database
mongoose.set("strictQuery",true);
mongoose.connect('mongodb+srv://sajitesh55:JX46hGJoK8t5Mcww@cluster0.9op3y4a.mongodb.net/myproperty',{
    useNewUrlParser:true,
    useUnifiedTopology:true
}).then(()=>{
    console.log("Mongoose Connection Successful")
})
.catch((error)=>{
    console.log("Mongoose error")
    console.log(error)
})

