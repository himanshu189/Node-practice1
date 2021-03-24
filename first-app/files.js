const fs =require('fs')


// // read file
// fs.readFile("./doc.txt",(error,data)=>{
// if(error){
//   console.log(error)
// }
// else{
//   console.log(data.toString())
// }
// })

// // writting file

// fs.writeFile("./doc.txt"," my name is himanshu",()=>{
//   console.log("written")
// })

// //writting in wrong file will create a file
// fs.writeFile("./doc1.txt"," my name is himanshu tyagi",()=>{
//   console.log("written")
// })


// directory
// if(!fs.existsSync("./assets")){
// fs.mkdir("./assets",(error)=>{
// if(error){
//   console.log(error)
// }
// console.log('folder created')
// })
// }
// else{
//   fs.rmdir('./assets',(error)=>{
//     if(error) {console.log(error)
//   }
//   console.log('file deleted')
// })
// }

// delete file

if( fs.existsSync("./doc1.txt")){

  fs.unlink("./doc1.txt",(error)=>{
    if(error){
      console.log(error);

    }
    console.log("file deleted");
  })
}
else{
  console.log("file doesnt exist")
}