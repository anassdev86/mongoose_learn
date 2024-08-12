const express = require("express");
const userController = require('./../controlles/userController');
const router = express.Router();

router
.route('/')
.get(userController.getAllUser)
.post(userController.createNewUser);

router
.route('/:id')
.get(userController.getOneUser)
.patch(userController.upDateUser);


module.exports = router;