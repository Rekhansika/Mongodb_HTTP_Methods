const express = require("express");

const app = express();

const mongoose = require("mongoose");

const dotenv = require("dotenv");
dotenv.config();

app.use(express.json())

app.get('/hii',(req,res)=>{
    res.send({msg:"Helloo"});

})

const router = require("./router");

app.use("/product",router);

app.listen(8000,async()=>{
    try {
        await mongoose.connect(process.env.MONGO);
        console.log("Server connected successfully");
    } catch (error) {
        console.log("Error",error);
    }
})