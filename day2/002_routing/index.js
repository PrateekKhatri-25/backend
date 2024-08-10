const http=require('http');

http.createServer((req,res)=>{
    const param=res.url;
    if(param==="/home"){
        res.end('hello home');
    }
    else if(param==="/about"){
        res.end('hello about')
    }
    res.end('hello')
}).listen(5000,()=>{
    console.log("server running at localhost:5000");
})
// console.log(__filename);
// console.log(object);