import express from 'express';
import authRouthes from './routes/auth.routes.js'; 
import dotenv from 'dotenv';
import connectDB from './DB/connectDB.js';
import cookieParser from 'cookie-parser';


dotenv.config();

const app = express();

app.use(express.json());//to parse resq.body
app.use(express.urlencoded({ extended: true }));//to parse form data
app.use(cookieParser());//to parse cookies

const PORT = process.env.PORT || 5000;

app.use("/api/auth", authRouthes);

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});