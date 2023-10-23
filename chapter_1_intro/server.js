//Now NodeJS is diffrent from vanila JS


// The Console is now the Terminal Window 


console.log("Hello World !");

// We have now global object instead of window object


// console.log(global);

// has common core modules that we will explore 

// CommonJS modules instead of ES6 modules


// We can import CommonJS Modules  

const os = require('os');

const path = require('path');

// const math = require('./math');


// console.log(math.add(1,3));
// console.log(math.sub(1,3));
// console.log(math.mul(1,3));
// console.log(math.div(1,3));


// I destructured all Modules from math  (Another Way)

const {add,sub,mul,div} = require('./math');

// now we use direct function instead of Dot Notation

console.log(add(3,5));
console.log(sub(3,5));
console.log(mul(3,5));
console.log(div(3,5));





// // We access our Windows sys information  
// console.log(os.type());
// console.log(os.version());
// console.log(os.homedir());



// // We got Full path till our Directory Name
// console.log(__dirname)

// // We got Full path till our File Name
// console.log(__filename);



// //  console.log(__dirname)

// // same as above 

// //<| |> i want to get directory name of file that i given in 
// // path.dirname() paramter (this file exsist on which directory ? name >>)

// console.log(path.dirname(__filename));


// // just name of current file that pass in a function
// console.log(path.basename(__filename));

// // Extention of file
// console.log(path.extname(__filename));



// // to get individual values parse have an object it self
// // so let's see in terminal window

// // They parse a File and give us a object and in object
// // we have some info about this file 
// console.log(path.parse(__filename));