const registseUser=async(req,res)=>{
    try{
        res.status(200).json({message:'done'})
    }
    catch(error){
        res.status(500).send({message:"Error fetching users"})
    }
}

module.exports =registseUser