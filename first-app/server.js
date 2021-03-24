const http =require('http')


const server =http.createServer((request,respond)=>{
  console.log('request made',request.url,request.method)
  // respond.setHeader('Content-type','text/plain')
  // respond.write('hello world')
respond.setHeader('Content-Type','text/html')
respond.write('<h1>hello</h1>')


  respond.end()

})

server.listen(3000,'localhost',()=>{
  console.log('listening for requests on port 3000');
})