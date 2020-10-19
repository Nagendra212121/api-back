const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
const morgan=require("morgan")
const ProductRoute=require("./Routes/ProductRoute")
const TransactionRoute=require("./Routes/TransactionRoute")


app.use(express.json());
app.use(cors());
dotenv.config({ path: "./.env" });
app.use(morgan("dev"))
app.use("/product",ProductRoute)
app.use("/transaction",TransactionRoute)
app.use("/cancelTransaction",TransactionRoute)
app.get("/",(req,res)=>res.send("ok"))
app.listen(4000, () => console.log("App Running on port Number 4000"));
