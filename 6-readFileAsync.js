const {readFile} = require("fs")


const retrieveText = (file_path) => {
    return new Promise((resolve,reject)=>{
        readFile(file_path,"utf-8",(error,data)=>{
            if(error){
                reject("error")
            }
            else{
                resolve(data)
            }
        })
    })
}



// let prom = retrieveText("./content/first.txt")
// prom
// .then((result)=>{
//     console.log(result)
// })
// .catch((error)=>{
//     console.log(error)
// })

async function retrieveTextAsync(){
    try{
        const promise_result = await retrieveText("./content/first.txt");
        console.log(promise_result)

    }catch(error){
        console.log(error)
    }
}

retrieveTextAsync()