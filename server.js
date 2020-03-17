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

if(process.env.NODE_ENV ==="production"){
    app.use(express.static("client/build"))
}
app.listen(PORT,function(){
    console.log("app is listening http://localhost:"+PORT)
})
