const Products = require("../Models/ProductModel")
exports.createProduct=async(req,res)=>
{
    try
    {
        const NewProduct=await Products.create(req.body);
        res.status(200).json({
        status:'Success',
        NewProduct
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


exports.getProducts=async(req,res)=>
{
    try
    {
        const GetProducts=await Products.find();
        res.status(200).json({
        status:'Success',
        GetProducts
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