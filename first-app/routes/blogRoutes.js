const express=require('express')
const router=express.Router()
const Blog = require("../models/blog");



router.get("/blog/create", (req, res) => {
  res.render("create", { title: "CREATE" });
});
// get request for rout eparameter like :id
router.get('/blog/:id',(req,res)=>{
  const id = req.params.id;
  Blog.findById(id)
  .then(result=>{
    res.render("details", {title:"details",blogs:result })
  })
  .catch(err=>console.log(err))
  
   })
  
   module.exports=router;