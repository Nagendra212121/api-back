const express = require("express")
const Products = require("../Models/ProductModel")
exports.createProduct=async(req,res)=>
{
    try
    {
        const NewProduct=await Products.create(req.body);
        res.status(200).json({
        status:'Success',
        data:{
                NewProduct
            }
        });
    }
    catch(err)
    {
        res.status(404).json({
            status:'fail',
            message:err
        });
    }
    
}