const fs = require('fs');

// rs means read stream 

const rs = fs.createReadStream('./Files/lorem.txt',{encoding:'utf8'});

// grabbing a file that we want to inject some text

// ws means write stream 
const ws = fs.createWriteStream('./Files/new-lorem.txt');

// rs.on('data',(dataChunk)=>{
//     ws.write(dataChunk);
// })


// This method is used to effecient way transfer
// data from readable Stream to Writeable Stream
rs.pipe(ws)