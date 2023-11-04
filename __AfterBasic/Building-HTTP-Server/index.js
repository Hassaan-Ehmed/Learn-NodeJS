const http = require('http');
const fs = require('fs');
const path  = require('path');

const SERVER = http.createServer((req,res)=>{

    // prepare a log 
const log = `${Date.now()}\t${req.url} new request is comming !\n`;

// create a log file and append into my log

fs.appendFile(path.join(__dirname,'log.txt'),log,(data,err)=>{

    res.end("<h1>Hello From Server</h1>");

});



// i serve pages Based on URL 

switch(req.url){

case '/':
    res.end(
"<h1 style='text-align:center'>Home Page</h1>"

);
    break;

    case '/about':
        res.end(
"<h1 style='text-align:center'>I'm About Page</h1>"
);
    break;

    default:
        res.end(
"<h1 style='text-align:center'>Error: 404</h1>"
);
    
    

}


}) ;


SERVER.listen(5500,()=>console.log("Server Started at port http://localhost:5500"))
