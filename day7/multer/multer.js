const multer = require('multer');
const path=require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, 'uploads')
        
    },
    filename: (req, file, cb) => {
        const extentionName=path.extname(file.originalname)
        cb(null, Date.now()+extentionName);
        console.log(file);
    }
})

const fileUpload = multer({ storage: storage }).fields([
    { name: 'images', maxCount: 10 },
    { name: 'thumbnail', maxCount: 1 }
]);

module.exports=fileUpload