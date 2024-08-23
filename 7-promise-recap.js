let walkTheDog = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Walked the dog")
        },2000)
    })
}

let washTheDishes = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Washed the dishes")
        },500)
    })
}


let takeOutTrash = () => {
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Took the trash out")
        },5000)
    })
}

// walkTheDog()
// .then((res)=>{
//     console.log(res);
//     return washTheDishes()
// })
// .then((res) => {
//     console.log(res);
//     return takeOutTrash()
// }).then((res)=>{
//     console.log(res)
//     console.log("finished all tasks")
// })
// .catch((err)=>{
//     console.log("Error: " + err)
// })

async function asynchronous(){
    try{
        let dog_result = await walkTheDog()
        console.log(dog_result)
        let wash_result = await washTheDishes()
        console.log(wash_result)
        let trash_result = await takeOutTrash()
        console.log(trash_result)
    }catch(error){
        console.log("Caught an error: " + error)
    }

}

asynchronous()

console.log("julio reyes")