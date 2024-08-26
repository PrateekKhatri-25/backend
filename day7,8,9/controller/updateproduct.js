const Products = require("../database/config");
const path=require('path');
const fs=require('fs')

const updateProduct = async (req, res) => {
    try {
        const old_data = await Products.findOne(req.params)
        // console.log(old_data);

        if (!old_data) return res.status(404).json({ message: 'data not found' })

        const data = req.body;

        if(req.files.thumbnail){
            const thumbnail = req.files.thumbnail[0].filename;

            if (thumbnail) data.thumbnail = thumbnail
            
            if(fs.existsSync(path.join('uploads',old_data.thumbnail))){
                fs.unlinkSync(path.join('uploads',old_data.thumbnail))
            }
        }

        if(req.files.images){
            const images = req.files.images.map((filedetail) => filedetail.filename);

            data.images = images;
            old_data.images.forEach((image) => {
                if (fs.existsSync(path.join('uploads', image))) {
                    fs.unlinkSync(path.join('uploads', image));
                }
            })
        }

        const response =await Products.updateOne(
            req.params,
            {
                $set:data
            }
        )
 

        // console.log(data);

        res.status(200).json({ message: 'data updated successfully',data:response })
    }
    catch (error) {
        console.log(error);
        if (error.kind === 'ObjectId') return res.status(403).json({ message: 'enter a valid id' })
        res.status(500).json({ message: 'something went wrong' })
    };

}

module.exports = updateProduct