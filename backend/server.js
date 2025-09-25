import express from 'express';
import authRouthes from './routes/auth.routes.js'; 
import userRoutes from './routes/user.routes.js';
import dotenv from 'dotenv';
import connectDB from './DB/connectDB.js';
import cookieParser from 'cookie-parser';
import { v2 as cloudinary } from 'cloudinary';


dotenv.config();

cloudinary.config({
    cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
    api_key: process.env.CLOUDINARY_API_KEY,
    api_secret: process.env.CLOUDINARY_API_SECRET,
});

const app = express();

app.use(express.json());//to parse resq.body
app.use(express.urlencoded({ extended: true }));//to parse form data
app.use(cookieParser());//to parse cookies

const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRouthes);
app.use("/api/user", userRoutes);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});