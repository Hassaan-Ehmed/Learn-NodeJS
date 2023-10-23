const {format} = require('date-fns');

// const {uuid} = require('uuid');
// console.log(uuid.v4())

const {v4:uuid} = require('uuid');


console.log(format(new Date(),'yyyyMMdd\thh:mm:ss'));


console.log(uuid());
console.log(uuid());