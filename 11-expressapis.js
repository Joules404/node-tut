const express = require("express")
const app = express()

const {products,people} = require('./data')


let teams = [
    
    {
        'team-name':'Manchester City',
        'color':'Blue'
    },
    {
        'team-name':'Manchester United',
        'color':'Red'
    }
]

app.get('/',(req,res)=>{
    // res.json({'first_name':'Julio','last_name':'Reyes'})
    // res.json(teams)
    // res.json(products)
    res.send("<h1>Hello world</h1>")
})

app.get('/api/products/:productID',(req,res)=>{
    // res.json(products)
    let {productID} = req.params
    let singleProduct = products.find((product)=>product.id == Number(productID))
    res.json(singleProduct)
})

app.get('/api/people/:index',(req,res)=>{
    console.log(req.params)
    res.json(people[req.params['index']])
})

app.listen(5000,()=>{
    console.log("Server is listening on port 5000...")
})