import mongoose from "mongoose";
import dotenv from 'dotenv'
import { dbname } from "../constant.js";

const connectdb = async()=>{
    try {
        const connectstring = await mongoose.connect(`${process.env.MONGO_URL}/${dbname}`)
        console.log(connectstring.connection.host)
    } catch (error) {
        console.log(error)
        process.exit(1)
    }
    
}

export default connectdb