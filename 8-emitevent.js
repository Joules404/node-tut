const EventsEmitter = require("events")
const customEmitter = new EventsEmitter()


customEmitter.on('the wings delivery guy is here',()=>{
    console.log(`getting wings `)
})

customEmitter.on('the pizza delivery guy is here',()=>{
    console.log(`getting pizza`)
})

customEmitter.emit('the wings delivery guy is here')
// customEmitter.emit('the pizza delivery guy is here')


///the on() is used to see what we want to hear and what we do when we hear it
///the emit() is used to "shout out" and if its what on() wants to hear then the on() will call the callback function 