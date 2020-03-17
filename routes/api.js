var axios = require("axios")
function apiroutes(app){
   app.get("/api/googlebooks/:query",function(req,res){
       var query = req.params.query
        axios.get("https://www.googleapis.com/books/v1/volumes?q="+query).then(function(response){
            console.log(response.data)
            res.json(response.data)
        })
   })
}
module.exports = apiroutes