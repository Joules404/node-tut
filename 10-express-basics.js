const express = require('express')
const path = require("path")

const app = express()

app.use(express.static('./public'))

app.get('/',(req,res)=>{
    // console.log(req.url)
    // console.log('User hit the root')
    // res.send("hello world from express function get /")
    console.log(req.url)
    // res.sendFile(path.resolve(__dirname,'./content/index.html'))
    // res.sendFile('./content/index.html')
    res.sendFile(path.resolve('./content/index.html'))
})

app.get('/about',(req,res)=>{
    console.log(req.url)
    console.log('User hit the about page')
    res.send("hello world from the express function get/about")
})


app.all('*',(req,res)=>{
    console.log("using all()")
    res.status(400).send("hit a 404 error in " + req.url + " page")    

})


app.listen(5000,()=>{
    console.log("listening on port 5000")
})