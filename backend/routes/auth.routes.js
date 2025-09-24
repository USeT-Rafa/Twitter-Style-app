import express from 'express';
import { login, signup, logout, getMe } from '../controllers/auth.controller.js';
import { protectedRoute } from '../middleware/proctedroute.js';

const router = express.Router();

router.post("/signup", signup);

router.post("/login", login);

router.post("/logout", logout);

router.get("/me",protectedRoute, getMe);



export default router;