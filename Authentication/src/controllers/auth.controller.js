const express = require('express');
const jwt = require("jsonwebtoken");  
const userModel = require('../models/user.model')

async function registerUser(req,res){
    
const { username, email, password } = req.body;

   const isUserAlreadyExists = await userModel.findOne({ email })
   if (isUserAlreadyExists){ return res.status(409).json ({ message: "User already exists"})}

    const user = await userModel.create({
        username, email, password
    }) //will use bcrypt to hash the password, it is only for learning purpose 

    const token = jwt.sign({
        id: user._id
    }, process.env.JWT_SECRET)

    
    // have to add security flags over here
    res.cookie("token", token) 

    res.status(201).json({
      message: "user created successfully",
      user, 
    })
}
module.exports = {registerUser} //object jiske andar ek property hai ek registerUser naame ki aur iss prroperty ki value hai ek function jiska naam hai registerUser 



// const { username, email, password } = req.body;


//    const isUserAlreadyExists = await userModel.findOne({ email })
//    if (isUserAlreadyExists){ return res.status(409).json ({ message: "User already exists"})}

//     const user = await userModel.create({
//         username, email, password
//     })

//     const token = jwt.sign({
//         id: user._id
//     }, process.env.JWT_SECRET)

//     res.cookie("token", token)

//     res.status(201).json({
//       message: "user created successfully",
//       user, 
//     })