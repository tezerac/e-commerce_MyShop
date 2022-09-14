const express = require('express')
const products = require('./Data/Products')

const busApp = express();

busApp.get('/api/products', (req,res) => {
    res.json(products);
})

busApp.get('/api/products/:id', (req,res) => {
const prod=products.find((p)=>p._id===req.params.id);
res.json(prod);
})

busApp.get('/tez/prod/:id',  (req,res) => {
const product=products.find((p)=>p._id===req.params.id);
    res.json(product);
})
busApp.listen(5000, console.log('the server is listening in port 5000'));