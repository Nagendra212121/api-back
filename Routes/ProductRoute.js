const express=require("express")
const ProductController=require("./../Controllers/ProductController")
const router=express.Router()

router
.route("/").get(ProductController.getProducts).post(ProductController.createProduct)

module.exports=router