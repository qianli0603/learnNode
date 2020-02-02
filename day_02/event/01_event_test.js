const EventEmiter = require('events');

const myEvent = new EventEmiter()

myEvent.on('我饿了',function(){
    console.log('要吃🍚')
})

myEvent.emit('我饿了')