const logsEvents = require('./logEvent');

const EventEmitter = require('events');


class MyEmitter extends EventEmitter {  };


// initilize object
const myEmitter = new MyEmitter();


//🔥
//  The eventEmitter.on() method is used to register listeners,
// while the eventEmitter.emit() method is used to trigger the event.




//add listener for the log Event;

// Log is event name

//myEmmiter.on() is for a register events

myEmitter.on('log',(msg) => logsEvents(msg));

setTimeout(()=>{

// .emit() trigger an eventinn above myEmitter checks if event is trigger and that is log so the callback is run that register 
// for this event
    myEmitter.emit('log',"Log event emmited !");
},2000);

