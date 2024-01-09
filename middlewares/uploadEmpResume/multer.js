const multer=require('multer')
const path=require("path")
/* This code is setting up a middleware for handling file uploads using the multer package in
Node.js. */
let storage = multer.diskStorage({
    destination: path.join(__dirname, "../../assets/pdfFiles"),
    filename: (req, file, cb) => {
        cb(null, Date.now() + file.originalname);
    },
});

 const pdfUpload = multer({
    storage: storage,
    fileFilter: (req, file, cb) => {
        if (file.mimetype == "application/pdf") {
            cb(null, true);
        } else {
            cb(null, false);
            cb(new Error("Only pdf  allow"));
        }
    },
});
module.exports = pdfUpload