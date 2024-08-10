const express = require('express')
const key = '250604'
const app = express()

const check_key=(req,res,next)=>{
    if (!req.params.key) return res.send("please enter a key");
    if (req.params.key !== key) return res.send("enter a valid key");

    next();
}

app.get('/user/:key?',check_key, (req, res) => {
    // console.log(req.params.key);
    
    res.send('Hello User')
})

app.listen(5200, () => {
    console.log('server is running on port 5200')
})