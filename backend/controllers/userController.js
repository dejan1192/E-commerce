const User = require('../models/userModel');

exports.getUsers = async (req, res) =>{

    const users = await User.find({});
  

    res.json({
        users
    })
};


exports.getUser = async(req, res) => {

    const id = req.params.id;

    const user = await User.findById(id);

    res.json({
        user
    });
};