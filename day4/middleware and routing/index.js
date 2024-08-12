const express=require('express');
const app =express();

const router1=express.Router();
const router2=express.Router();

const m1=(req,res,next)=>{
    console.log("middleware 1");

    next();
};

const m2=(req,res,next)=>{
    console.log("middleware 2");

    next();
};

const m3=(req,res,next)=>{
    console.log("middleware 3");

    next();
};

app.use(m1);
router1.use(m2);
router2.use(m3);

router1.get('/api1',(req,res)=>{
    res.send('Hello World 1')
});

router1.get('/api2',(req,res)=>{
    res.send('Hello World 2')
});

router2.get('/api3',(req,res)=>{
    res.send('Hello World 3')
});
router2.get('/api4',(req,res)=>{
    res.send('Hello World 4')
});

router2.get('/api5',(req,res)=>{
    res.send('Hello World 5')
});

app.use('/users',router1);
app.use('/admin',router2)

app.listen(5200,()=>{
    console.log('Server is running on port 5200')
})