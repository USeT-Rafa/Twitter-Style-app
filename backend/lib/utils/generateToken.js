import jwt from 'jsonwebtoken';

export const generateTokenAndSetCookie = (userID, res) => {
    const token = jwt.sign({ userID}, process.env.JWT_SECRET, { 
        expiresIn: '15d' 
    })
    
    res.cookie("jwt",token,{
        MaxAge: 15*24*60*60*1000,
        httpOnly: true,//prevents client side js to access the cookie
        sameSite : "strict",//csrf attack prevention
        secure: process.env.NODE_ENV !== 'development' //cookie only sent over https
    })
    return token;
}