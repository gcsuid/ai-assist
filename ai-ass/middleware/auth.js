import jwt from "jsonwebtoken";
import User from "../models/user.js";

export const authenticate = (req,res,next)=>{
    const token = req.headers.authorization?.split(" ")[1];
    if(!token) return res.status(401).json({error: "Unauthorized"});

    try {
       const decoded = jwt.verify(token, process.env.JWT_SECRET); 
       /*(err, decoded) => {
            if (err) {  
                return res.status(401).json({error: "Unauthorized", details: err.message});
            }*/

              req.user = decoded;
              next();
    }catch (error) {
        return res.status(401).json({error: "Unauthorized", details: error.message});
    }
}
