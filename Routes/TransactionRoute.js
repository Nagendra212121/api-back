const express=require("express")
const TransactionController=require("./../Controllers/TransactionController")
const router=express.Router()

router
.route("/").get(TransactionController.getTransactions).post(TransactionController.createTransaction)

router
.route("/").patch(TransactionController.cancelTransaction)

module.exports=router