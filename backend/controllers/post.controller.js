//models
import Post from '../models/post.model.js';
import User from '../models/user.models.js';
import { v2 as cloudinary } from 'cloudinary';

export const createPost = async (req, res) => {
    try {
        const { text} = req.body;
        let { img } = req.body; 
        const userId = req.user._id.toString();
        const user = await User.findById(userId);

        if(!user){
            return res.status(404).json({ message: 'User not found' });
        }

        if(!img && !text){
            return res.status(400).json({ message: 'Post text or image is required' });
        }

        const newPost = new Post({
            user: userId,
            text,
            img
        });

        if(img){
            // Upload image to Cloudinary
            const uploadResponse = await cloudinary.uploader.upload(img);
            img = uploadResponse.secure_url;

        }

        await newPost.save();
        res.status(201).json(newPost);

        
    } catch (error) {
        console.log("Error in createPost controller", error.message);
        res.status(500).json({ error: 'Internal server error' });  
    }
}

