import mongoose, { Mongoose } from "mongoose";
import constants from './constants.js';


const connectDB = async () => {
    try {
  const connectionInstance  = await Mongoose.connect(`${process.env.MONGODB_URl}/${DB_NAME}`)
  console.log(`\n MongoDB connected ${connectionInstance.connection.host}`)
    } catch (error) {
        console.log("MONGODB connection error", error)
        process.exit(1)
    }
}
export default connectDB