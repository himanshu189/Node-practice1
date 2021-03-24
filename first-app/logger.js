var url ="http://mylogger.io/log";

function log(message){
  console.log(message)
}
module.exports.log=log;
//or if we only have to export 1 function
// module.export=log
//it will replace ecport as log
//then we can directly call logger instead of logger .log
