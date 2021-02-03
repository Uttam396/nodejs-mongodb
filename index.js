const connection = require("./model/app");
const express = require("express");
const app = express();
const path = require("path");
const Handlebars = require('handlebars')
const expressHandlerbars = require("express-handlebars");
const bodyparser = require("body-parser");
const CourseController = require("./controllers/courses");
const { allowInsecurePrototypeAccess } = require('@handlebars/allow-prototype-access');


app.use(bodyparser.urlencoded({
    extended : true
}));

app.set('views', path.join(__dirname, "/views/"));

app.engine("hbs",expressHandlerbars({
    extname : "hbs",
    defaultLayout : "mainlayout",
    handlebars: allowInsecurePrototypeAccess(Handlebars),
    layoutsDir : __dirname + "/views/layouts"
}));

app.set("view engine", "hbs")

app.get("/", (req,res) =>{
    // res.send('<h1>Welcome to Home Page</h1>');
    res.render("index", {})
})

app.use("/course", CourseController);

app.listen("3000", ()=>{
    console.log("Server Started");
});