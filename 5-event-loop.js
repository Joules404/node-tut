const {readFile} = require("fs")

console.log("first console statement before async op.")
readFile("./content/second.txt","utf-8",(error,response)=>{
    if(error){
        console.log("there was an error retrieving file");
        return;
    }
    console.log("performing console statement inside async op. 1")
    console.log(response)
})
console.log("last console statement after the async op. 1")
console.log("last console statement after the async op. 2")
console.log("last console statement after the async op. 3")
console.log("last console statement after the async op. 4")
