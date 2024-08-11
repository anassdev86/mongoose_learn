const env = require('dotenv');
env.config({path: './config.env'});
const http = require('http');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);

const sevrer = http.createServer();

mongoose.connect(DB)
        .then(msg => console.log('DATABASE CONNECTED :)'))
        .catch(err => console.log(err));

sevrer.on('request',(req, res) => {
    res.end('Hello world');
});

sevrer.listen(PORT, '127.0.0.1', () => {
    console.log('SERVER RUN AT: '+ PORT);
});