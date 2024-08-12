const mongoose = require('mongoose');

const firstSchema = new mongoose.Schema({
    name: {type: String, required: true},
    large:{
       type:Number,
       default: 14
    },
    age: {type: Number, unique: true, required: true}
});

const User = mongoose.model("User", firstSchema);

module.exports = User;