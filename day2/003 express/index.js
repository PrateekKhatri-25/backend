const express=require('express');
const app=express();

app.get('/', (req,res)=>{
    res.send('home route')
});

app.get('/about', (req,res)=>{
    res.send('about route');
    console.log(req);
});   

app.post('/',(req,res)=>{
    res.send('home route by post')
});


app.listen(5300,()=>{
    console.log("server running at localhost 5300");
})

// const http=require('http');
// http.createServer((req,res)=>{
//     const param=req.url;
//     console.log(typeof(param));
//     res.end("hello world")
//     if(param=="/"){
//         res.end("home route");
//         }
//         else if(param=="/about"){
//             res.end("about route");
//             }
// }).listen(5200,()=>{
//     console.log("server is running at 5200");
// })