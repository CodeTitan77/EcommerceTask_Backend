const mongoose = require("mongoose");
const orderSchema = mongoose.Schema({
    userId: {
        type: mongoose.Types.ObjectId,
        ref: "User",
        required: true,
    },
    address: {
        type: String,
        required: true,
    },
    products: [{  
        productId: {
            type: mongoose.Types.ObjectId,
            ref: "Product",
        },
       
        quantity: Number,
      
        size: String  
    }],
    totalPrice: {
        type: Number,
        required: true
    },
    status: {
        type: String,
        enum: ['pending', 'confirmed', 'shipped', 'delivered'],
        default: 'pending'
    }
}, {timestamps: true});
const Order = mongoose.model("Order", orderSchema);

module.exports =  Order;


