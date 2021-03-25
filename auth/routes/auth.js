const express = require('express');
const router=express.Router()
const {registerValidation,loginValidation} =require('../validation')


const User =require('../models/user')
const bcrypt= require('bcryptjs')


router.post('/register', async (req,res)=>{

  // validate data before making a user
 
  
//  const{error,value} =schema.validate(req.body)
// if(error) return res.status(400).send(error.details[0].message)
 const {error,value}= registerValidation(req.body)
if(error) return res.status(400).send(error.details[0].message)

//  checking if the user is already in database
const emailExists = await User.findOne({email:req.body.email})
if(emailExists) return res.status(400).send('eamil already exists')

// hash the password
const salt = await bcrypt.genSalt(10);
const hashPassword= await bcrypt.hash(req.body.password,salt)




//  res.send(error.details[0].message)

// create new user
  const user =new User({
name:req.body.name,
email:req.body.email,
password:hashPassword

  })
  user.save()
  .then(result=>res.send(result))
  .catch(err=>res.status(404).send(err))
})

// LOgin

router.post('/login',(req,res)=>{


  // validate data 
  const {error,value}= loginValidation(req.body)
  if(error){ return res.status(400).send(error.details[0].message )}
})



//  checking if the user is  in database
const emailExists = await User.findOne({email:req.body.email})
if(!emailExists) return res.status(400).send('eamil doesnt exists')


module.exports= router

// mongodb+srv://himanshu189:<password>@cluster0.z4ou1.mongodb.net/myFirstDatabase?retryWrites=true&w=majority