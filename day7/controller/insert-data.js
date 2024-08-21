const controller = (req, res) => {
    try {
        const data = req.body;
        const thumbnail = req.files.thumbnail[0].filename;
        // console.log(thumbnail);
        if (thumbnail) data.thumbnail = thumbnail
        // console.log(data);
        const images = req.files.images.map((filedetail) => filedetail.filename);
        // console.log(images);
        data.images = images;
        console.log(data);
        res.status(200).json({ message: 'done' })
    }
    catch (error) {
        console.log(error);
        res.status(500).json({ message: 'something went wrong' })
    }
};

module.exports = controller;