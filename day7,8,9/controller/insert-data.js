const products = require("../database/config");

const controller = async(req, res) => {
    try {
        const data = req.body;

        const thumbnail = req.files.thumbnail[0].filename;

        if (thumbnail) data.thumbnail = thumbnail

        const images = req.files.images.map((filedetail) => filedetail.filename);

        data.images = images;

        const finalData=new products(data);

        const response= await finalData.save();
        
        res.status(200).json({ message: 'done' ,response})
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'something went wrong' })
    }
};

module.exports = controller;