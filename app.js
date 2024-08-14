const express = require('express');
const cors = require('cors');
const User = require('./models/userModel');
const userController = require('./controlles/userController');
const app = express();
const userRouter = require('./routes/userRoutes');




app.use(express.static(`${__dirname}/public`));
app.use(express.json());
app.use(cors());


app.get('/api', );

// app.get('/', (req, res) => res.redirect('./index.html'));

app.use('/api/v1/users', userRouter);


module.exports = app;