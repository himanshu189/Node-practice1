const fs=require('fs')

const readstream=fs.createReadStream("./buff.txt",{encoding:'utf8'})
const writestram =fs.createWriteStream('./buff3.txt')
readstream.on('data',(chunk)=>{

  console.log("---new chunk---------")
  console.log(chunk)
  writestram.write("\n --- \n ----\n ---- \n")
  writestram.write(chunk)
})
// or
// readstream.pipe(writestram)