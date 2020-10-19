const mongoose = require("mongoose")
const TransactionSchema=new mongoose.Schema({
    Customer_Name:{
        type:String,
        required:[true,"customer name is required"]
    },
    Product:{
        type:String,
        required:[true,"specify product Name"]
    },
    Quantity:{
        type:Number,
        required:[true,"specify product quantity"]
    },
    Status:{
        type:String,
        enum:["Confirmed","Cancelled"],
        required:true
    },
    productID:{
        type:mongoose.Schema.ObjectId,
        ref:'Products'
    }
})
const Transactions = mongoose.model("Transactions",TransactionSchema)
module.exports=Transactions
