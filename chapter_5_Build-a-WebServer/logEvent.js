// const {format} = require('date-fns');
// const {v4:uuid} = require('uuid');

// // Common core modules

// const fs = require('fs');
// const path = require('path');
// const fsPromises = require('fs').promises;


// const logEvents = async (message)=>{


// const dateTime = `${format(new Date(),"yyyy/mm/dd\thh:mm:ss")}`

// const logItem = `${dateTime}\t${uuid()}\t${message}\n`;

// console.log(logItem);


// try {
    

//     if(!fs.existsSync('./logs')){

//         await fsPromises.mkdir('./logs',(err)=>{
            
//             if(err) throw err;

//             console.log("Folder Created Succesfully !");

//         })
//     }

// await fsPromises.appendFile(path.join(__dirname,"logs","eventlog.txt"),logItem);


// } catch (error) {
//     console.error(error);
// }


// }



// module.exports = logEvents


