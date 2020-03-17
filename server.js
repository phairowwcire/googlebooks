var express = require("express")
var app = express()
var PORT = process.env.PORT ||3001
app.use(express.urlencoded({extended:true}))
app.use(express.json())
var mongoose = require("mongoose")
var apiroutes = require("./routes/api")
apiroutes(app)
var mongoose = require("mongoose")
app.use(express.static("public"))
mongoose.connect(process.env.MONGODB||"mongodb://localhost/googlebooks")
app.listen(PORT,function(){
    console.log("app is listening http://localhost:"+PORT)
})
