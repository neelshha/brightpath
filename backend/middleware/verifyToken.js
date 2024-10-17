import jwt from "jsonwebtoken";
import dotenv from "dotenv";

export const verifyToken = (req, res, next) => {
    const token = req.cookies.token;

    if(!token){
        return res.status(401).json({success: false, message: "Unauthorized - No token provided"});
    }

    try {
        dotenv.config();
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        if(!decoded){
            return res.status(401).json({success: false, message: "Unauthorized - No token provided"});
        }

        req.userId = decoded.userId;
        next();
        }
         catch (error) {
            console.log("Error in verifyToken ", error);
            return res.status(500).json({success: false, message: "Server error"});
         }
    }