const express = require('express');

const app = express();

app.use(express.json());

app.get('/', (req, res) => {
    res.json({
        status: 200,
        message: 'welcome to our SERVER'
    })
})


module.exports = app;