const app=require('./app')
const mongoose=require("mongoose")
//console.log(process.env.DATABASE)
const db=process.env.DATABASE.replace("<password>",process.env.PASSWORD)
mongoose.connect(db,{
    useNewUrlParser:true,
    useCreateIndex:true,useFindAndModify:false
}).then(()=>console.log("connected"))
//mongoose.("connect",()=>console.log('working'))

//app.listen(4000)
