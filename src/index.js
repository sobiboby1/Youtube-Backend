import mongoose from "mongoose";
import {DB_NAME} from "./constants";
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
