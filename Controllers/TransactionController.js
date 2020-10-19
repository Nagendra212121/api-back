const express = require("express")
exports.createTransaction = async(req,res)=>
{
    try
    {
        const NewTransaction=await Transactions.create(req.body);
        res.status(200).json({
        status:'Success',
        data:{
                NewTransaction
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














