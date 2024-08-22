const {readFile,writeFile} = require('fs');

readFile("./content/first.txt","utf8",(error,response)=>{
    if(error){
        console.log(error)
        return
    }
    // console.log(response)
    return response
})

const url1 = "./content/first.txt"
function getData(url){
    readFile(url,"utf8",(err,res)=>{
        if(err) return;
        console.log("Response ahold of.")
        console.log(res)
    })
}

getData(url1)