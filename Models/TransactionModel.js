const mongoose = require("mongoose")
const TransactionSchema=new mongoose.Schema({
    Customer_Name:{
        type:String,
        required:[true,"customer name is required"]
    },
    Product_Required:{
        type:String,
        required:[true,"specify product Name"]
    },
    Quantity_Required:{
        type:Number,
        required:[true,"specify product quantity"]
    },
    status:{
        type:Enum,
        values:["Confirmed","cancelled"],
        required:true
    }
})
const Transactions = mongoose.model(Transactions,TransactionSchema)
module.exports=Transactions
