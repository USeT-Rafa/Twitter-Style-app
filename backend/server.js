import express from 'express';
import authRouthes from './routes/auth.routes.js'; 
import dotenv from 'dotenv';
import connectDB from './config/db.js';


dotenv.config();

const app = express();

console.log(process.env.MONGO_URI);

app.use("/api/auth", authRouthes);

app.listen(8000,()=>{
    console.log("Server is running on port 8000");
    connectDB(process.env.MONGO_URI);
});