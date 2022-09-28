const express = require("express")
const http = require("https")
parser = require("body-parser")
const app = express()
app.use(parser.urlencoded({ extended: true}))
app.get("/",function(req,res){
  res.sendFile(__dirname+'/index.html')
})
app.post("/joke",function(req,res){
  var type=req.body.pype
  console.log(type)
  url='https://v2.jokeapi.dev/joke/'+type
  console.log(url)
  http.get(url,function(response){
    response.on('data',function(data){
      a=JSON.parse(data)
      res.write(a.setup)
      res.write(a.delivery)
      res.send()
    })
  })
})
app.listen(3000,function(){
  console.log("Server started on port 3000")
})
