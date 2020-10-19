const app = require("./app");
const mongoose = require("mongoose");
const db = process.env.DATABASE.replace("<password>", process.env.PASSWORD);
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  })
  .then(() => console.log("connected"));
