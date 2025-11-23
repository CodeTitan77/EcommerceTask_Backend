const express = require("express");
const Product = require("../Models/Product");
const productRouter = express.Router();

productRouter.get("/product", async (req, res) => {
    try {
        const products = await Product.find();
        return res.status(200).json({ data: products });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
});

productRouter.get("/product/:category", async (req, res) => {
    try {
        const { category } = req.params;
        const products = await Product.find({ category: { $all: [category] } });
        return res.status(200).json({ data: products });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
});

productRouter.get("/product/byId/:productId", async (req, res) => {
    try {
        const { productId } = req.params;
        const product = await Product.findById(productId);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }
        return res.status(200).json({ data: product });
    } catch (error) {
        return res.status(400).json({ message: error.message });
    }
});

module.exports = productRouter;