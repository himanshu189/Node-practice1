const express=require('express')
const app =express()
const authRoute=require("./routes/auth")
const postRoute=require("./routes/posts")
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const bodyParser=require('body-parser')
dotenv.config()

app.use(bodyParser.json())


mongoose.connect(process.env.DB_CONNECT ,{useNewUrlParser:true,useUnifiedTopology:true})
.then(result=>console.log('connected'))
.catch(err=>console.log("error"))

app.use('/api/user',authRoute);
app.use("/api/posts",postRoute)

app.listen(3000, ()=>console.log("server started"))