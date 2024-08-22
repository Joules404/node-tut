const http  = require("http");

const server = http.createServer((request,response)=>{
    if(request.url == '/'){
        response.end("this is the homepage")
    }
    if(request.url=='/about'){
        response.end("this is the about page")
    }
    response.end(`
        <h1>This is not the homepage nor the about page</h1>
        <h2>This was done by having html in side the response.end(-----)</h2>
        `)
})

server.listen(5000);