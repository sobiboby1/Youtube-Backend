// require('dotenv').config({path: './env'})

import dotenv from "dotenv";

import mongoose from "mongoose";
import {DB_NAME} from "./constants.js";
import connectDB from "./db/index.js";


dotenv.config({ path: './.env' })


connectDB()
.then(() => {
    app.listen(process.env.port || 4000, ()=> {
        console.log(`server is active on ${process.env.port}`);
    } )
})
.catch((err) =>{
console.log("mongo failed")
});


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
