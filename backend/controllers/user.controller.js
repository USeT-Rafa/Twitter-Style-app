import User from '../models/user.models.js';

export const getUserProfile = async (req, res) => {
    const { username } = req.params;
    try {
        const user = await User.findOne({ username }).select("-password -email -__v");
        if(!user){
            return res.status(404).json({ error: 'User not found' });
        }
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
        console.log("Error in getUserProfile controller ", error.message);
    }
}

export const followUnfollowUser = async (req, res) => {
    try {
        const { id } = req.params; //id of the user to be followed/unfollowed
        const userToModidfy= await user.findById(id);
        const currentUser = await User.findById(req.user._id);

        if(id === req.user._id){
            return res.status(400).json({ error: "You can´t follow or unfolled yourself" });
        }

        if(!userToModidfy || !currentUser){
            return res.status(400).json({error: "User not found"})
        }

        const isfollowing = currentUser.following.includes(id);

        if(isfollowing){

        }else{
            
        }

  
    } catch (error) {
        res.status(500).json({ error: 'Internal server error' });
        console.log("Error in followUnfollowUser controller ", error.message);
    }
}