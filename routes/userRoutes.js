const express = require("express");
const multer = require('multer');
const userController = require('./../controlles/userController');
const router = express.Router();

const storage = multer.diskStorage({
    destination: function(req, file, cb){
     cb(null, './uploads');
    },
    filename: function(req, file, cb){
        cb(null, file.originalname);
    }
})
const upload = multer({storage});
router
.route('/')
.get(userController.getAllUser)
.post(upload.single("image"), userController.createNewUser);

router
.route('/:id')
.get(userController.getOneUser)
.patch(userController.upDateUser)
.delete(userController.deleteUser);

router
.route('/upload')
.post(upload.single("image"),userController.upLoadImage)


module.exports = router;