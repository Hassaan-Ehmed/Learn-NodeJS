// Common core modules

const fs = require("fs");
const fsPromises = require("fs").promises;
const path = require("path");
const http = require("http");

const logEvent = require("./logEvent");

const EventEmitter = require("events");
const { dir } = require("console");

class Emitter extends EventEmitter {}

// initilize object
const myEmitter = new Emitter();

//    setup a port

const PORT = process.env.PORT || 3500;


const serveFile = async(filePath, contentType, response)=>{

try{

const data = await fsPromises.readFile(filePath,'utf8',response.writeHead(200),{'Content-Type':contentType});

response.end(data);


}catch(err){
    console.error(err);
    response.statusCode = 500;
    response.end();
}



}


// Create a Server

const server = http.createServer((req, res) => {
  console.log(req.url, req.method);

  // A way to Serve a Page

  // Version 1
  // let filePath;
  // if(req.url=== '/' || req.url=== 'index.html'){

  // // 200 means Success Code !
  //     res.statusCode = 200;
  // res.setHeader('Content-Type','text/html');

  // filePath = path.join(__dirname,"views","index.html");

  // fs.readFile(filePath,"utf8",(err,data)=>{

  //     if(err) throw err;
  //     res.end(data);

  // });

  // }

  // Another way to serve a webpage to a Browser

  // Version 2

  // let filePath;

  // this is not Dynamic
  // switch(req.url){

  // case "/":

  // res.statusCode = 200;

  // filePath = path.join(__dirname,"views",'index.html');

  // fs.readFile(filePath,'utf8',(err,data)=>{

  //     if(err) throw err;
  //     res.end(data);

  // });

  // break;

  // }

  const extentionName = path.extname(req.url);

  let contentType;

  switch (extentionName) {
    case ".css":
      contentType = "text/css";
      break;

    case ".js":
      contentType = "text/javascript";
      break;

    case ".json":
      contentType = "application/json";
      break;

    case ".jpg":
      contentType = "image/jpeg";
      break;

    case ".png":
      contentType = "image/png";
      break;

    case ".txt":
      contentType = "text/plain";
      break;

    default:
      contentType = "text/html";
      break;
  }

  let filePath =
    contentType === "text/html" && req.url === "/"
      ? path.join(__dirname, "views", "index.html")
      : contentType === "text/html" && req.url.slice(-1) === "/"
      ? path.join(__dirname, "views", req.url, "index.html")
      : contentType === "text/html"
      ? path.join(__dirname, "views", req.url)
      : path.join(__dirname, req.url);


// makes .html extension not required in the browser
if(!extentionName && req.url.slice(-1) != '/') filePath += '.html'

const fileExist  = fs.existsSync(filePath);


if(fileExist){

// server the file 

serveFile(filePath,contentType,res)
}else{
    // 404
    // 301 -> redirect code !



switch(path.parse(filePath).base){

    case "old-page.html":
        res.writeHead(301,{"Location":'/new-page.html'});
        res.end();
        break;

        case "www-page.html":
        res.writeHead(301,{"Location":'/'});
            res.end(); 
            break;
            
       default:
        // serve a 404 response     

serveFile(path.join(__dirname,"views","404.html"),"text/html",res);
    }




// Destructure user's request name of files    
// console.log(path.parse(filePath));

}


    });

// Listen to port
server.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// myEmitter.on('log',(msg) => logsEvents(msg));

// setTimeout(()=>{

// // .emit() trigger an eventinn above myEmitter checks if event is trigger and that is log so the callback is run that register
// // for this event
//     myEmitter.emit('log',"Log event emmited !");
// },2000);
