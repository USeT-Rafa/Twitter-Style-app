import mongoose from 'mongoose';


const connectDB = async (url) => {
    try {
        const connect= await mongoose.connect(url);   
        console.log(`MongoDB connected: ${connect.connection.host}`);
    } catch (error) {
        console.error('Error connecting to MongoDB: ${error.message}');
        process.exit(1);
    }       
}

export default connectDB;