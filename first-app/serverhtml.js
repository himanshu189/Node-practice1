const http=require('http')
const fs=require('fs')
const _=require('lodash')

const server=http.createServer((req,res)=>{

// lodash

const num = _.random(0,20)
console.log(num)


// fn call only once

const greet =_.once(()=>{
  console.log('hello');
})

greet()
greet()

res.setHeader('Content-Type','text/html')

let path='./html/'
switch(req.url){
  case '/':
    path+= 'index.html'
    res.statusCode=200;
    break;
  case '/about':
    path+='about.html'
    res.statusCode=200;

    break
    case '/about-us':
      res.statusCode=301;
      res.setHeader('Location','/about')
  res.end()
      break
  default:
    path+='404.html'
    res.statusCode=404;

    break
}

fs.readFile(path,(err,data)=>{
if(err){
  console.log(path);
  res.end()
}
else{
  res.write(data)
  // res.statusCode=200;
  res.end()
}

})

})
server.listen('3001','localhost',()=>{
  console.log('listening for request on prot 3000');
})