const products = require("../database/config")

const readproduct=async(req,res)=>{
    try{
        const response=await products.find();

        const path=`${req.protocol}/${req.get('host')}/uploads`;
        
        res.status(200).json({message:'completed',response,file_path:path})
    }
    catch(error){
        res.status(500).json({message:'error',error})
        }
}

module.exports=readproduct