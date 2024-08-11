const env = require('dotenv');
env.config({path: './config.env'});
const app = require('./app');

const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);


mongoose.connect(DB)
        .then(msg => console.log('DATABASE CONNECTED :)'))
        .catch(err => console.log(err));



app.listen(PORT, '127.0.0.1', () => {
    console.log('SERVER RUN AT: '+ PORT);
});