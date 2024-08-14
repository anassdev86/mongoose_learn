const User = require('./../models/userModel');



exports.createNewUser = async (req, res) => {
   try{
    
        console.log(req.file.originalname);

        const newUser =  await User.create({
        name: req.body.name,
        image: req.file.originalname,
        large: req.body.large,
        age: req.body.age
     })
    //  
    res.status(201).json({
        status: "seccess",
        message: "OK",
        result: newUser
    });

   }catch(err){
     res.status(500).json({
        status:'Fail',
        message: err.message
     })
   }


};

exports.getAllUser = async (req, res) => {
    try{
        let data = await User.find();
     
    res.json({
        status: 200,
        message: 'welcome to our SERVER',
        result: data
    })
    }catch(err){
        res.status(400).json({
            status: "Fail",
            messgae: err
        })
    }
};

exports.getOneUser = async (req, res) => {
    try{
       const user = await User.findById(req.params.id);
       // User.findOne({_id: req.params.id})
       res.status(201).json({
        status: "success",
        data: user
       })
    }catch(err){
        res.status(400).json({
            status: "Fail",
            messgae: err
        })
    }
};

exports.upDateUser = async (req, res) => {
    try{
      const user = await User.findByIdAndUpdate(req.params.id, req.body, {new: true, runValidators: true});
      res.status(200).json({
        status: 'success',
        data: user
      })
    }catch(err){
        console.log(err)
        res.status(400).json({
            status: "Fail",
            messgae: err.message
        });
    }
}

exports.deleteUser = async (req, res) => {
    
    try{
        await User.deleteOne({_id: req.params.id});
        res.status(204).json({
            status: "success",
            results: null
        })
    }catch(err){
        res.status(400).json({
            status: 'Fail',
            message: err.message
        })
    }

}

exports.upLoadImage = (req, res) => {
    res.json(req.file);
}


// OLD METHOD TO CREATE NEW USER
// exports.createNewUser = (req, res) => {
//     const {name, large } = req.body;
//     const newUser = new User({name, large});
    
//     if(!name) return res.status(404).send({
//         status: 404,
//         message: 'please enter a name'
    
//     });
//         newUser.save().then(doc => {
//             res.status(200).send({
//                 status: 200,
//                 message: 'OK',
//                 data: doc
//             });
//         }).catch(err => console.log(err));
        
//     };