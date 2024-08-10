const http=require('http');
const data=require('./app')

http.createServer((req,res)=>{
    res.writeHead(200,{'content-type':'application/json'});
    res.write(JSON.stringify(data));
    res.end();
}).listen(5000);

// console.log(__dirname);