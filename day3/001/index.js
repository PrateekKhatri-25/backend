const express = require('express')
const path=require('path');
const app = express();

const file_path=path.join(__dirname,'public');

app.use(express.static(file_path))

app.get('/about',(req,res)=>{
    res.sendFile(`${file_path}/about.html`)
})

app.get('/',(req,res)=>{
    res.sendFile(`${file_path}/index.html`)
})

app.get('/contact',(req,res)=>{
    res.sendFile(`${file_path}/contact.html`)
})

app.get('/courses',(req,res)=>{
    res.sendFile(`${file_path}/courses.html`)
})

app.get('/gallery',(req,res)=>{
    res.sendFile(`${file_path}/gallery.html`)
})

app.get('/enquiry',(req,res)=>{
    res.sendFile(`${file_path}/enquiry.html`)
})

app.listen(5000,()=>{
    console.log('Server is running on port 5000')
})