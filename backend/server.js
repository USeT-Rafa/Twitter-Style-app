import express from 'express';
import authRouthes from './routes/auth.routes.js'; 

const app = express();

app.use("/api/auth", authRouthes);

app.listen(8000,()=>{
    console.log("Server is running on port 8000");
});