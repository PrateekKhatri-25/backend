const fs=require('fs');
const path=require('path');

//create file
// const filename=__dirname
// fs.writeFileSync(`${__dirname}/test.txt`,"hello everbody")


//read file
// fs.readFile(`${__dirname}/test.txt`,'utf-8',(err,data)=>{
//     console.log(data);
// })

//update file
// fs.appendFileSync(`${__dirname}/test.txt`,' now its updated');

//delete file
fs.unlinkSync(`${__dirname}/test.txt`)