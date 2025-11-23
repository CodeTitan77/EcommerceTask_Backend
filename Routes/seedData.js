const express = require("express");
const Product = require("../Models/Product");

const seedData=async(products)=>{
    try{
        const Pro=products.map(async(pro)=>{
    const nProduct= new Product({
        name:pro.name,
        description:pro.description,
        price:pro.price,
        category:pro.category,
        clothCategory:pro.clothCategory,
        image:pro.image,
        rating:pro.rating,
        stock:pro.stock,
        sizes:pro.sizes,
        color:pro.color,
        brand:pro.brand
    })
    return await nProduct.save();
  })
  await Promise.all(Pro);
  console.log("data inserted");

    }
    catch(error){
        console.log("Error in data insertion",error);
    }
  

}

const products = [
  
  {
    name: "Floral Maxi Dress",
    description: "Elegant floral print maxi dress with flowing silhouette, perfect for summer occasions",
    price: 2499,
      category: ['Clothing'],
clothCategory:['Women'],

    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500",
    rating: 1.7,
    stock: 65,
    sizes: ["XS", "S", "M", "L", "XL"],
    color: ["Blue", "Pink", "Green"],
    brand: "H&M"
  },
  {
    name: "Women's Denim Jacket",
    description: "Classic blue denim jacket with button closure and chest pockets",
    price: 3499,
      category: ['Clothing'],
clothCategory
: 
['Women'],
    image: "https://images.unsplash.com/photo-1551028719-00167b16eac5?w=500",
    rating: 2.5,
    stock: 45,
    sizes: ["S", "M", "L", "XL"],
    color: ["Light Blue", "Dark Blue", "Black"],
    brand: "Levi's"
  },
  {
    name: "Casual White Blouse",
    description: "Lightweight cotton blouse with relaxed fit, ideal for office or casual wear",
    price: 1799,
     category: ['Clothing'],
     clothCategory
: 
['Women'],
    image: "https://images.unsplash.com/photo-1564257577-f226f8b8c9f4?w=500",
    rating: 3.4,
    stock: 90,
    sizes: ["XS", "S", "M", "L", "XL"],
    color: ["White", "Cream", "Light Pink"],
    brand: "Mango"
  },
  {
    name: "High Waisted Jeans",
    description: "Comfortable high-rise skinny jeans with stretch denim fabric",
    price: 2999,
   category: ['Clothing'],
clothCategory
: 
['Women'],
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500",
    rating: 1.8,
    stock: 75,
    sizes: ["XS", "S", "M", "L", "XL"],
    color: ["Blue", "Black", "Grey"],
    brand: "Zara"
  },

 
]

module.exports={seedData,products};