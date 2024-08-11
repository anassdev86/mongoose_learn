const express = require('express');
const { default: mongoose } = require('mongoose');

const app = express();


app.use(express.static(`${__dirname}/public`));
app.use(express.json());


const firstSchema = new mongoose.Schema({
    name: {type: String, required: true},
    large:{
       type:Number,
       default: 14
    }
});

const User = mongoose.model("User", firstSchema);

app.get('/api', async (req, res) => {
     let data = await User.find();
     console.log(data);
    res.json({
        status: 200,
        message: 'welcome to our SERVER'
    })
});

app.get('/', (req, res) => res.redirect('./index.html'));




app.post('/api/newclient', (req, res) => {
    const {name, large } = req.body;
    const newUser = new User({name, large});
    
    if(!name) return res.status(404).send({
        status: 404,
        message: 'please enter a name'
    });
    newUser.save().then(doc => {
        res.status(200).send({
            status: 200,
            message: 'OK',
            data: doc
        });
    }).catch(err => console.log(err));
    
})


module.exports = app;