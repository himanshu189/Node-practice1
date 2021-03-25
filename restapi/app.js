const express =require('express')
const app =express()
const mongoose = require('mongoose');
const bodyParser=require('body-parser')
const cors = require('cors');
// middleware
app.use(cors())
 app.use(bodyParser.json())
//ROUTES
 const postRoute = require('./routes/posts');


app.get('/',(req,res)=>{
  res.send('home page K k ')
})

app.use("/posts",postRoute)
// db conncect
mongoose.connect("mongodb+srv://himanshu189:Valuecoders@123@cluster0.z4ou1.mongodb.net/rest?retryWrites=true&w=majority",{ useNewUrlParser: true, useUnifiedTopology: true })
.then(result=>{
  console.log("connected")
})
.catch(err=>console.log(err))


app.listen(3000)
