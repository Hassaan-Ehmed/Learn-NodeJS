const { log } = require('console');
// const fs = require('fs');

const path = require('path');

const fsPromises = require('fs').promises;


const fileOps =  async ()  =>{
            

try{

    const data = await fsPromises.readFile(path.join(__dirname,'Files','intro.txt'),'utf8');
    console.log(data);

// unlike is for delete a file
fsPromises.unlink(path.join(__dirname,'Files','intro.txt'));

    fsPromises.writeFile(path.join(__dirname,'Files','writePromises.txt'),data);

    fsPromises.appendFile(path.join(__dirname,'Files','writePromises.txt'),'\n\n nice to meet you by Promises ~');

    fsPromises.rename(path.join(__dirname,'Files','writePromises.txt'),path.join(__dirname,'Files','newWritePromises.txt'));

    const newData = await fsPromises.readFile(path.join(__dirname,'Files','newWritePromises.txt'),'utf8');
    console.log(newData);

}

catch(err) {  console.error(err)  }

}
fileOps()



// fs.readFile('./Files/intro.txt',(err,data)=>{

// if(err) throw err;

// console.log(data.toString());

// })


// So The Scene is when i read a file so he give me a Buffer decodes value so i apply toString() method // in my Result (Data)_ to Filter out my actual output

//  then i remove toString() method from my data and now I put 2nd parameter of fs.readFile()
// and  that is our "Encoding" UTF-8

// fs.readFile('./Files/intro.txt','utf8',(err,data)=>{

// if(err) throw err;
// console.log(data);


// })

// instead of given addres you also write your path in this way -> path.join(
//




// path object is a built in object in NodeJS that help us to work with our paths in different
// operating systems such as Windows, macOS, Linux etc... because when you work with 
//different OS and write hardcode path so this is not acceptable for others operating systems
// because in Windows we seprate our path to backslash "/" and in Unix Based Operating Systems
//  we work with Forward slash "\" so that's why we pass adress path segments such as  our files and directory names in path.join() method  and and path.join() automatically create our path and also they dynamically adapt path separtor based on operating systems




// they can join all of these arguments into single path with the help of join() method
//"/+Files+intro.txt
//   )


// fs.readFile(path.join(__dirname,'Files','intro.txt'),'utf8',(err,data)=>{

//     if(err) throw err;

//     console.log(data);
// })


// process.on('uncaughtException',err =>{
//     console.error(`There was an uncaught error: ${err}`)
//     process.exit(1);
// })



// console.log("Hello...");


// if File Exsist so they update a file otherwise they first create newly and then 
// append text into it


//💮 if File Exsist they Updated a content otherwise they create a new file and append my content 



// 🔥 we control the behaviuor of Asyncronous with just like in above we write a File and in writting-file callback we put appendFile(modifying a File) and in append-file callback function we perform  our Renaming operation  


//🤔 Callback Hell is Starting  Now ! so now we use "async / await" 


// fs.writeFile(path.join(__dirname,"Files","cat.txt"),"Cat says, 'MEOW' ",(err)=>{

// if(err) throw err;

// console.log("Operation of  Writting a File is  Completed ! ");


// Same as fs.writeFile();

// fs.appendFile(path.join(__dirname,"Files","cat.txt"),"\n\n Cat is Hungry :( ",(err)=>{

//     if(err) throw err;
    
//     console.log("Operation of  Modifiyng a File is  Completed ! ");


   // Rename a exsisting File name

// i rename my "reply" file to "newReply"    

// new path means i just pasting a new path with previous path like :
//old path: './Files/reply.txt' => new path: './Files/newReply.txt'

//for renaming a file we just put a (new Path) in 2nd parameter of fs.rename(.,⚫,.);
    
// fs.rename(path.join(__dirname,"Files","reply.txt"),path.join(__dirname,"Files","newReply.txt"),(err)=>{
//     console.log("Rename Completed !");
// })


    
//     });




// });









    


