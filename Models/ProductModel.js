const mongoose = require("mongoose")
const ProductSchema= new mongoose.Schema({
    Product:{
        type:String,
        required:[true,"product Name is Mandatory"]
    },
    In_Stock{
        type:Number,
        required:[true,"InStock value is Required"]
    },
    Warehouse:{
        type:String,
        required:[true,"warehouse name is required"]
    }
})
const Products=mongoose.model(Products,ProductSchema)
module.exports=Products 
