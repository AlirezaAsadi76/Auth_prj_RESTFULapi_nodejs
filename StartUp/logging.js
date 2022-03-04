require('express-async-errors');
const winston=require('winston');

module.exports=function(){
    //sync
process.on('uncaughtException', (err) => {
    winston.error(err.message,err);
})
//asyncc
process.on('unhandledRejection', (err) => {
    winston.error(err.message,err);
})
winston.add(new winston.transports.File({filename:"logfile.log"}));
}