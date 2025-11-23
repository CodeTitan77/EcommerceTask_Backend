const mongoose = require("mongoose");
const jwt=require("jsonwebtoken");


const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    emailId: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    phone: {
        type: String
    },
    address: {
        type: String
    },
    secondAddress:{
         type: String
    },
    
}, {
    timestamps: true
});

UserSchema.methods.getJwt= async function(){
    const user= this;
    const token= await jwt.sign({_id:user._id},"Ecommerce77",{
        expiresIn:"1d",

    });
    return token;


}

const User = mongoose.model("User", UserSchema);

module.exports =  User ;