const env = require('dotenv');
env.config({path: './config.env'});
const app = require('./app');

const mongoose = require('mongoose');

const PORT = process.env.PORT || 3000;
const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);


mongoose.connect(DB, { useNewUrlParser: true,  useUnifiedTopology: true })
        .then(msg => console.log('DATABASE CONNECTED :)'))
        .catch(err => console.log(err));



app.listen(PORT, () => {
    console.log('SERVER RUN AT: '+ PORT);
});