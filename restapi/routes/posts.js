const express =require('express')
const router =express.Router()
const Posts=require('../models/post')

router.get('/',(req,res)=>{
  Posts.find().limit(4).sort({createdAt:-1})
  .then(result=>res.send(result))
  .catch(err=>res.send(err))
  
})
// submit a post
router.post('/',(req,res)=>{
  console.log(req.body)
  const post = new Posts(req.body)
  post.save()
  .then(result=>{
    res.send(result)
  })
  .catch(err=>res.send(err))
})

router.get('/specific',(req,res)=>{
  res.send(' specific post page')
})
// get specific post
router.get('/:id',(req,res)=>{
 console.log(req.params.id)
 Posts.findById(req.params.id)
 .then(result=>res.send(result))
 .catch(err=>console.log(err))

})

//delete post

 router.delete('/:id',(req,res)=>{
   Posts.remove({_id:req.params.id})
   .then(result=>{
     console.log('removed successfully')
    res.send(result)})
   .catch(err=>console.log(err))
 })
 
//  update post title
router.patch('/:id',(req,res)=>{
  Posts.updateOne({_id:req.params.id},{$set:{title:req.body.title}})
  .then(result=>res.send(result))
  .catch(err=>res.send(err))
})

 module.exports=router