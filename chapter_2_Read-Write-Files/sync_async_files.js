// const fs = require('fs');


// // Syncronous Call 

// fs.writeFileSync('./test.txt',"Hey this is a sync... method to write a file");


// // Async method and this time we have 3rd parameter 
// //callback for Handling Async Behavoiur

// fs.writeFile('./hook.txt',"This is Async",(err,data)=>{

// if(err) throw err;
// console.log(data);

// });



// const result  = fs.readFileSync("./test.txt",'utf8');

// console.log(result);


// fs.readFile('./hook.txt','utf8',(err,data)=>{

//     if(err) throw err;


//     console.log(data);

// });


// fs.cpSync("./test.txt","./copy.txt");

// console.log(fs.statSync("./hook.txt"));


