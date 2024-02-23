import express from "express";
import mongoose from "mongoose";
import userRoutes from "./routes/user.routes.js";
import dotenv from "dotenv";
dotenv.config();
const app=express();

const connectDb=async()=>{

    await mongoose.connect(process.env.MONGODB).then(()=>{
        console.log("connected to Db");
    }).catch((err)=>{
        throw err
    })
}
app.use("/api/users",userRoutes);
app.listen(8500,()=>{
    connectDb();
    console.log('server is listening at 8500');
})