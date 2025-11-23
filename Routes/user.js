const express = require("express");
const User = require("../Models/User");
const userRouter = express.Router();


userRouter.get("/user/id/:id", async (req, res) => {
    const {id} = req.params;
    try {
        const nUser = await User.findById(id);
        return res.status(200).json({data: nUser});
    } catch (error) {
        return res.status(400).json({message: error.message});
    }
});


userRouter.get("/user/:email", async (req, res) => {
    const {email} = req.params;
    console.log(email);
    try {
        const nUser = await User.findOne({emailId: email})
        return res.status(200).json({data: nUser});
    } catch (error) {
        return res.status(400).json({message: error.message});
    }
});

userRouter.put("/user/change/:id", async (req, res) => {
    try {
        const {id} = req.params;
        const user = await User.findByIdAndUpdate(
            id,
            { 
                address: req.body.address,
                secondAddress: req.body.secondAddress
            },
            {new: true}
        );
        
        if (!user) {
            return res.status(404).json({message: "User not found"});
        }
        
        return res.status(200).json({ 
            message: "Address updated successfully", 
            data: user 
        });
    } catch (error) {
        return res.status(400).json({message: error.message});
    }
});

module.exports = userRouter;