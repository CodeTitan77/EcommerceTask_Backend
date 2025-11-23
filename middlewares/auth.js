// build to validate tokens and make the routes protected 
const User = require("../Models/User");
const jwt = require("jsonwebtoken");
const userAuth= async(req,res,next)=>{
    try{
         const {token}= req.cookies;
     if(!token) {
            return res.status(401).send("Please Login!"); 
        }
        const decodedObj= await jwt.verify(token,"Ecommerce77");
        const {_id}= decodedObj;
        const user= await User.findById(_id);
        if(!user){
            throw new Error("User does not exist");
        }
        req.user= user;
        next();

    }
    catch(error){
        return res.status(400).json({"message":error.message});
    }
   
}
module.exports={userAuth};