///multer for beginners
///busbody is for advance

//cb=call back

const express=require('express');
const multer=require('multer');

const app=express();
// const multerAB=multer();
const storage=multer.diskStorage({
    destination:(req,file,cb)=>{
        cb(null,'fileuploads');
    },
    filename:(req,file,cb)=>{
        // console.log(file);
        cb(null, Date.now() + file.originalname);
    }
});
const fileUpload=multer({storage:storage}).single('image');

const multiplefileupload=multer({storage:storage}).array('multipleImage', 12 );

const multiplefield=multer({storage:storage}).fields([
    {name:'thumbnail',maxCount:1},
    {name:'images',maxCount:12}
])

app.use(express.json());

app.post('/insert-data',fileUpload, (req,res)=>{
    // console.log(req.body);
    res.send('done');
});

app.post('/multi-file',multiplefileupload ,(req,res)=>{
    res.send('done')
})

app.post('/multi-fields',multiplefield ,(req,res)=>{
    res.send('done')
})

app.listen(5300,()=>{
    console.log('server is running on port 5300');
})