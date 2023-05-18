const asyncHandler= require("express-async-handler");
const bcrypt = require("bcrypt");
const User = require("../models/userModel")
const registerUser =asyncHandler(async  (req,res)=>{
    const {username,email,password}=req.body;
    if(!username || !email || !password){
        res.status(400);
        throw new Error("all fields are mandatory!")
    }
    const userAvailable = await User.findOne({email});
    if(userAvailable){
        res.status(400);
        throw new Error("user already exixst")
    }
   //hash password
   const hashedPassword = await bcrypt.hash(password,10)
   console.log(hashedPassword)
   const user= await User.create({
    username,
    email,
    password:hashedPassword,
   })
    console.log(`user created ${user}`)
    if(user){
       res.status(201).json({_id:user.id, email:user.email}) 
    }else{
        res.status(400);
        throw new Error("user data was not valid")
    }
    res.json({message:"register the user"})
} );

const loginUser =asyncHandler(async  (req,res)=>{
    res.json({message:"login the user"})
} );
const currentUser =asyncHandler(async  (req,res)=>{
    res.json({message:"current  user"})
} );



module.exports= {registerUser,loginUser,currentUser}