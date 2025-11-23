
const validator= require('validator');
const validateSignUpData= (req)=>{
    
    const {name,address,emailId,password}=req.body;
    if(!name){
        throw new Error("Name is not valid  ")

    }
    if(!address){
        throw new Error("Address is not valid ");

    }
     if(!password){
        throw new Error("Address is not valid ");

    }
    else if(!validator.isEmail(emailId)){
        throw new Error("Email is not valid ")
    }
    
}; 
module.exports={validateSignUpData};