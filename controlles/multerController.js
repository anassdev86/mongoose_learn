const multer = require('multer');

const random_number = () => {
    return Math.floor(Math.random() * 1332);
}
const storage = multer.diskStorage({
    destination: function(req, file, cb){
        cb(null,  "./public/downloads");
    },
    filename: function(req, file, cb){
        const index = file.originalname.indexOf('.');
        const ext = file.originalname.slice(index);
        const name = file.originalname.slice(0, index);
        file.originalname = name + random_number() + ext;
        cb(null, file.originalname);
    }
})
const upload = multer({ storage });

module.exports = upload;
