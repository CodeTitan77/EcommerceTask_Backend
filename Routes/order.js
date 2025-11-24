const express=require("express");
const Product = require("../Models/Product");
const orderRouter = express.Router();
const Order= require("../Models/Order");
const User = require("../Models/User");

orderRouter.post("/order/newOrder",async(req,res)=>{
    try{
        const id=req.body.id;
  
        const user=await User.findById(id);
       
        // console.log(req.body);
       
        const nOrder= new Order({
            userId:id,
            address:req.body.address,
            products:req.body.products,
            totalPrice:req.body.totalPrice
        })
        const SavedObj= await nOrder.save();
        return res.status(200).json({message:"Order saved",data:SavedObj});

       

    }
    catch(error){
         return res.status(400).json({message:error.message});
    }

})
orderRouter.get("/order/:id",async(req,res)=>{
    try{
        const {id}=req.params;
        const Norder= await Order.find({userId:id}).populate('products.productId').populate('userId');
        return res.status(200).json({
            data:Norder
        });

    }
    catch(error){
        return res.status(400).json({message:error.message});
    }
  
})
module.exports= orderRouter;




