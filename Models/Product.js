const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    category: {
        type: [String],
        enum: ["Books", , "Electronics", "Art", "Furniture","Clothing"],
        required: true
    },
    image: {
        type: String,
        required: true
    },
    rating: {
        type: Number,
        default: 0,
        min: 0,
        max: 5
    },
    clothCategory:{
      type:[String],
      enum:["Men","Women","Kid"]
    },
    stock: {
        type: Number,
        default: 0
    },
    sizes: {
        type: [String],
        enum: ["XS", "S", "M", "L", "XL", "XXL"]
    },
    color: {
        type: [String]
    },
    author: {
        type: String
    },
    pages: {
        type: Number
    },
    brand: {
        type: String
    },
    material: {
        type: String
    }
}, {
    timestamps: true
});

const Product = mongoose.model("Product", ProductSchema);

module.exports =  Product ;