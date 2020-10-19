const Transactions=require("./../Models/TransactionModel")
const Products = require("./../Models/ProductModel");

exports.createTransaction = async(req,res)=>
{
    console.log(req.body)
    try
    {
        const {Customer_Name,Product,Quantity,Status,Warehouse}=req.body;
        const product=await Products.findOne({Product,Warehouse})
        console.log(product)
        if(product.InStock>=Quantity)
        {
            const updatedQuantity=product.InStock-Quantity;
            const updatedProduct=await Products.updateOne({Product,Warehouse},{InStock:updatedQuantity})
            const NewTransaction=await Transactions.create({Customer_Name,Product,Quantity,Status,productID:product._id});
            res.status(200).json({
            status:'Success',
            NewTransaction
        });}
        else throw "order not accepted"
    }
    catch(err)
    {
        res.status(404).json({
            status:'fail',
            message:err
        });
    }
}

exports.getTransactions = async(req,res)=>
{
    try
    {
        const GetTransactions=await Transactions.find();
        res.status(200).json({
        status:'Success',
        data:{
                GetTransactions
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

exports.cancelTransaction = async(req,res)=>
{
    try
    {
        const {_id}=req.body;
        const customer=await Transactions.findById(_id)
        if(customer.Quantity>0 && customer.Status==="Confirmed")
        {
            const updatedProduct=await Products.findByIdAndUpdate({_id:customer.productID},{$inc:{InStock:customer.Quantity}})
            customer.Quantity=0;
            customer.Status="Cancelled"
            await customer.save()
            res.status(200).json({
                    status:'Success',
                })
        }
        else throw "something went wrong"
    }
    catch(err)
    {
        res.status(404).json({
            status:'fail',
            message:err
        });
    }
}













