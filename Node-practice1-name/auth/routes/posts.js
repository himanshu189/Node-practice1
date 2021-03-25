const express = require('express');
const User =require('../models/user')

const router=express.Router()

const verify = require('./privateRoute')



router.get('/',verify,(req,res)=>{

console.log(req.user._id)
User.findById({_id:req.user._id})
.then(result=>{
if(result.role===1){
   res.send('welcome u r a admin')
}
else{
  res.send('u r a user')
}

})
.catch(err=>res.send(err))



})

module.exports= router
