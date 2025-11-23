const express= require("express");
const authRouter= express.Router();
const {  validateSignUpData } = require("../utils/validation");
const User = require("../Models/User");
const bcrypt = require("bcrypt");
authRouter.post("/signUp",async(req,res)=>{
    try{
      validateSignUpData(req);
      const {name,password,emailId,address}=req.body;
      const encryptedPassword= await bcrypt.hash(password,10);  
      const newUser = new User({
        name:name,
        emailId,
        address,
        password:encryptedPassword
      });
     const savedUser= await newUser.save();
     const token= await savedUser.getJwt(); 
     res.cookie("token",token,{
       expires: new Date(Date.now() + 8 * 3600000),
     });
     res.status(200).json({message:"User Saved Successfully",data:savedUser});
    }
    catch(error){
       res.status(400).json({ error: error.message });
    }
})

authRouter.post("/login",async(req,res)=>{
    try{
        const {emailId,password}=req.body;
        const user= await User.findOne({emailId:emailId});
          if(!user){
            throw new Error("Invalid Credentials")
        }
        const hashedPassword= user.password;
        const isPasswordValid= await bcrypt.compare(
         password,
         hashedPassword
        )
        if(!isPasswordValid){
             throw new Error("InCorrect Password");
        }
        else{
            const token= await user.getJwt();
             res.cookie("token",token,{
            expires: new Date(Date.now()+ 8*3600000)
        });
          res.status(200).send(user);
        }



    }
    catch(error){
    res.status(400).json({ error: error.message });
    }
})
authRouter.post("/logout",async(req,res)=>{
    res.cookie("token",null,{
        expires: new Date(Date.now()),
    })
      return res.status(200).send();
})
module.exports= authRouter;

