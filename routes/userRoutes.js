const express = require("express");
const userController = require('./../controlles/userController');
const router = express.Router();
const upload = require('../controlles/multerController');


router
.route('/')
.get(userController.getAllUser)
.post(upload.single('file'), userController.createNewUser);

router
.route('/:id')
.get(userController.getOneUser)
.patch(userController.upDateUser)
.delete(userController.deleteUser);

router
.route('/upload')
.post(upload.single("file"),userController.upLoadImage)


module.exports = router;