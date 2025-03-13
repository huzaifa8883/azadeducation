import mongoose from "mongoose";
import dotenv from "dotenv";
import { dbname } from "../constant.js";

dotenv.config(); // Load environment variables

const connectdb = async () => {
    try {
        // Ensure the MongoDB password is URL-encoded if it contains special characters
        const encodedPassword = encodeURIComponent(process.env.DB_PASSWORD);
        
        // Correctly formatted connection string
        const connectionString = `mongodb+srv://website:${encodedPassword}@cluster0.neu99.mongodb.net/${dbname}?retryWrites=true&w=majority&appName=Cluster0`;

        const connection = await mongoose.connect(connectionString, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        });

        console.log(`✅ MongoDB Connected: ${connection.connection.host}`);
    } catch (error) {
        console.error("❌ MongoDB Connection Error:", error);
        process.exit(1);
    }
};

export default connectdb;
