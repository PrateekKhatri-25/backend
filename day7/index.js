const express =require('express');
const controller = require('./controller/insert-data');
const fileUpload = require('./multer/multer');

const app=express();

app.post('/insert-data',fileUpload, controller)

app.listen(5200,()=>{
    console.log('the server is running at 5200 port');
})