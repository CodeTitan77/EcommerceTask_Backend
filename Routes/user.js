const express = require("express");
const User = require("../Models/User");
const userRouter = express.Router();

userRouter.get("/user/id/:id", async (req, res) => {
  const { id } = req.params;
  try {
    const nUser = await User.findById(id);
    return res.status(200).json({ data: nUser });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});
userRouter.post("/user/:id/address/:addressId",async(req,res)=>{
  try{
     const {id,addressId}=req.params;
    const{updatedAddressObject}=req.body;
    const nuser= await User.findOneAndUpdate(
      {_id:id, "address._id":addressId},
      {  $set: {
          "address.$": updatedAddressObject   
        }
      },
      {
        new:true,
      },
    );
    return res.status(200).json({message:"address updated ",data:nuser});

  }
  catch(error){
    return res.status(400).json({message:error.message});
  }
   

});

userRouter.get("/user/:email", async (req, res) => {
  const { email } = req.params;
  try {
    const nUser = await User.findOne({ emailId: email });
    return res.status(200).json({ data: nUser });
  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

userRouter.post("/user/:id/address", async (req, res) => {
  try {
    const { id } = req.params;
    const newAddress = req.body;

    const user = await User.findByIdAndUpdate(
      id,
      { $push: { address: newAddress } },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      message: "Address added successfully",
      data: user
    });

  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

userRouter.delete("/user/:id/address/:addressId", async (req, res) => {
  try {
    const { id, addressId } = req.params;

    const user = await User.findByIdAndUpdate(
      id,
      { $pull: { address: { _id: addressId } } },
      { new: true }
    );

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    return res.status(200).json({
      message: "Address deleted successfully",
      data: user
    });

  } catch (error) {
    return res.status(400).json({ message: error.message });
  }
});

module.exports = userRouter;
