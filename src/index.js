// require('dotenv').config({path: './env'})

import dotenv from "dotenv";

import mongoose from "mongoose";
import {DB_NAME} from "./constants";
import connectDB from "./db/index.js";


dotenv.config({
    path: './env'
})


connectDB();


/*

import express from "express";

const app = express();

( async () => {
    try{
await mongoose.connect(`${process.env.MONGODB_URl}/${DB_NAME}`)
app.on("error",(error)=>{
    console.log("ERROR", error)
})

     app.listen(process.env.port, ()=>{
        console.log(`app is listening on port ${process.env.port}`)
     })

    }catch (error){
console.log("ERROR", error)
throw err
    }
})
*/
