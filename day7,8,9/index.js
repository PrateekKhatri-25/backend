const express =require('express');
const controller = require('./controller/insert-data');
const fileUpload = require('./multer/multer');
const readproduct = require('./controller/read-product');
const deleteproduct = require('./controller/delete-product');
const updateProduct = require('./controller/updateproduct');
require('./database/config')

const app=express();

app.post('/insert-data',fileUpload, controller)

app.get('/read-product', readproduct)

app.delete('/delete-product/:_id?', deleteproduct);

app.put('/update-data/:_id?',fileUpload , updateProduct)


app.listen(5200,()=>{
    console.log('the server is running at 5200 port');
})