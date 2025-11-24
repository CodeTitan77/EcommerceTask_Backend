const mongoose=require("mongoose");

const MONGO_URI="mongodb+srv://neoG:jT0UnL47fm79JroL@cluster0.jourr.mongodb.net/ecommerce?retryWrites=true&w=majority&appName=Cluster0"

 const IntializeDatabase= async()=>{
    try{
        await mongoose.connect(MONGO_URI).then(
            console.log("Database Connected")
        );

    }
    catch(error){
        console.log("Error connecting the datbase");
    }
}
module.exports={IntializeDatabase};
