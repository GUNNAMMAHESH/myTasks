const EventEmitter = require('events'); //class

const newEvent = new EventEmitter();  //object

newEvent.on('start', () => {    //callback
    console.log('started');
  });

  newEvent.emit('start')