const mongoose = require('mongoose');
const Schema =mongoose.Schema

const postSchema = new Schema({
  title:{
    type:String,
    required:true
  },
  description:{
    type:String,
    required:true
  },
  date:{
    type:Date,
    default:Date.now
  }
},{timestamps:true })

const Posts =mongoose.model('Post',postSchema)
module.exports=Posts