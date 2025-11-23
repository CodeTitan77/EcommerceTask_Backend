const mongoose=require("mongoose");
require("dotenv").config();


 const IntializeDatabase= async()=>{
    try{
        await mongoose.connect(process.env.MONGO_URI).then(
            console.log("Database Connected")
        );

    }
    catch(error){
        console.log("Error connecting the datbase");
    }
}
module.exports={IntializeDatabase};
