const express = require("express");
const cors = require("cors");
const app = express();
const dotenv = require("dotenv");
app.use(express.json());
app.use(cors());
dotenv.config({ path: "./.env" });


app.listen(4000, () => console.log("App Running on port Number 4000"));
