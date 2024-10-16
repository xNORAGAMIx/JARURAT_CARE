import mongoose from "mongoose";
import colors from "colors";

const connectDB = async() => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI);
        console.log(`MongoDB connected: ${conn.connection.host}`.bgCyan);
    } catch (error) {
        console.log(`Connection error: ${error}`.bgRed);
    }
}

export default connectDB;