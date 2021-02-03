const mongoose = require("mongoose");
 mongoose.connect("mongodb://localhost:27017/Edureka", { useNewUrlParser:true , useUnifiedTopology: true}, (error) => {
    if(!error)
    {
        console.log("Success Connected");
    }
    else
    {
        console.log("Error Connecting to Database");
    }
 });

 const Course = require("./course.model");