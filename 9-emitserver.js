const http  = require("http")


//this is the way we were first thought by having callback function when initializing server variable
// const server = http.createServer((request,response)=>{
//     // console.log(response)
//     console.log("Entered port 5000")
// })


const server = http.createServer()
server.on('request',(request,response)=>{
    console.log("Entered port 5000 (on)")
    response.write("hello world")
    response.end()
})


server.listen(5000)