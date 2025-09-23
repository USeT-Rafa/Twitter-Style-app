import User from '../models/user.models.js';
import { generateTokenAndSetCookie } from '../lib/utils/generateToken.js';
import bcrypt from 'bcryptjs';

export const signup = async (req, res) => {
    try {
        const{ username, fullname, email, password } = req.body;
        if(!username || !fullname || !email || !password){
            return res.status(400).json({ error: 'Please provide all required fields' });   
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if(!emailRegex.test(email)){
            return res.status(400).json({ error: 'Please provide a valid email address' });
        }

        const existingUser = await User.findOne({username});
        if(existingUser){
            return res.status(400).json({ error: 'Username is already taken' });
        }

        const existingEmail = await User.findOne({email});
        if(existingEmail){
            return res.status(400).json({ error: 'Email is already registered' });
        }

        //hash the password

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            fullname,
            username,
            email,
            password: hashPassword
        })
        
        if(newUser){
            generateTokenAndSetCookie(newUser._id, res);
            await newUser.save();
            
            res.status(201).json(
                {
                    _id: newUser._id,
                    fullname: newUser.fullname,
                    username: newUser.username,
                    email: newUser.email,
                    followers: newUser.followers,
                    following: newUser.following,
                    profileImg: newUser.profileImg,
                    coverImg: newUser.coverImg,
                    bio: newUser.bio,
                }
            );
        } else {
            res.status(400).json({ error: 'Invalid user data' });
        }


    } catch (error) {
        console.log("Error in signup controller", error.message);
        res.status(500).json({ error: 'Internal server error' });
    }
}

export const login = async (req, res) => {
    res.json({
        data: "you hit the login endpoint" 
    })
}

export const logout = async (req, res) => {
    res.json({
        data: "you hit the logout endpoint" 
    })
}