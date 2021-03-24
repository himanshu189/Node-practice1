const express = require("express");
var morgan = require("morgan");
const mongoose = require("mongoose");
const Blog = require("./models/blog");
// express app
const app = express();
const blogRoutes =require('./routes/blogRoutes')
// mongo db

const dbURI ="mongodb+srv://himanshu189:Valuecoders@123@cluster0.z4ou1.mongodb.net/nodedemo?retryWrites=true&w=majority"
  
mongoose
  .connect(dbURI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then((result) => 
  app.listen(3000))
  .catch((err) => console.log(err));

// register view engine
app.set("view engine", "ejs");

// listen for request which is now in .then 

const blogs = [
  { title: "blog 1", snippet: " snippet 1 ka blog" },
  { title: "blog 2", snippet: " snippet 2 ka blog" },
  { title: "blog 3", snippet: " snippet 3 ka blog" },
  { title: "blog 4", snippet: " snippet 4 ka blog" },
];

// middleware and static files
app.use(express.static("public "));
// middleware for encoding data from create.ejs form to here
app.use(express.urlencoded({extended:true}))

// mongoose and mongo sandbox routes
app.get("/add-blog", (req,res)=>{

const blog =new Blog({
  title:"vishal",
  snippet:'Tyagi',
  body:'vinove'
})
blog.save()
.then((result)=>{
  res.send(result)
})
.catch((err)=>console.log(err))

})
// fetch document
app.get('/all-blogs',(req,res)=>{

  Blog.find()
  .then(result=>res.send(result))
  .catch(err=>console.log(err))
})

// fetch single blog
app.get('/single-blog',(req,res)=>{
  Blog.findById("6059b738d5877747ad60c639")
  .then(result=>res.send(result))
  .catch(err=>console.log(err))
})


//  using next method with app.use to tell express to go ahead

// app.use((req,res,next)=>{

//   console.log("path", req.path);
//   console.log("host",req.hostname);
//   console.log("method",req.method);
//   console.log("------");
//   next()
// })

// using morgan logger instead of use middleware
// app.use(morgan("dev"));
// app.use(morgan("tiny"));

app.get("/", (req, res) => {
  // res.send('<h1>home page using express</p>')
  // res.sendFile('./html/index.html',{root:__dirname})

  // res.render("index", { title: "HOME", blogs });

  // fetching data from db

  Blog.find().sort({createdAt:-1})
  .then(result=>{
    
    res.render("index", { title: "HOME", blogs:result })
  })
  .catch(err=>console.log(err))

});

// post request to home

app.post("/",(req,res)=>{
//  console.log(req.body)
const blog = new Blog(req.body)
blog.save()
.then(result=>{
  res.redirect('/')

})
.catch(err=>console.log(err))

})





//  this use middleware wont run because we have already sent response in get

app.use((req, res, next) => {
  console.log(" next middleware------");
  next();
});

app.get("/about", (req, res) => {
  // res.send('<h1>about page using express</p>')
  // res.sendFile('./html/about.html',{root:__dirname})
  res.render("about", { title: "ABOUT" });
});


// redirect
app.get("/aboutuk", (req, res) => {
  res.redirect("/about");
});
// 404

app.use(blogRoutes)

app.use((req, res) => {
  // res.status(404).sendFile('./html/404.html',{root:__dirname})
  res.status(404).render("404", { title: "NOT FOUND" });
});

