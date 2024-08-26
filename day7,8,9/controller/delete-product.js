const Products = require("../database/config");
const path = require('path');
const fs = require('fs');

const deleteproduct = async (req, res) => {
    try {
        const response = await Products.findOne(req.params)
        // console.log(response);

        if (!response) return res.status(404).json({ message: 'product not found' });

        if (fs.existsSync(path.join('uploads', response.thumbnail))) {
            fs.unlinkSync(path.join('uploads', response.thumbnail));
        }

        response.images.forEach((image) => {
            if (fs.existsSync(path.join('uploads', image))) {
                fs.unlinkSync(path.join('uploads', image));
            }
        })

        const data = await Products.deleteOne(req.params)
        res.json({ message: "Product deleted successfully",data: data });
    }
    catch (error) {
        if(error.kind) return res.status(403).json({message:'enter a valid id'})
        console.log(error);
        res.status(500).json({ msg: error.message });
    }
}

module.exports = deleteproduct