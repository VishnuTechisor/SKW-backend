const pdfUploadHandler = async (req, res, next) => {
    try {
        const pdfPath = req.file?.filename;

        // const result = await cloudinary.uploader.upload(imagePath, options);

        res.locals.pdfUrl = {
            pdfName: pdfPath,
        };

        return next();
    } catch (error) {
        console.error(error);
    }
};

module.exports=pdfUploadHandler