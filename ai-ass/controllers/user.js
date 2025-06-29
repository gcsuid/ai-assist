import brcypt from "bcrypt";
import jwt from "jsonwebtoken";
import User from "../models/user.js";
import { inngest } from "../inngest/client.js";

export const signup = async(req,res) =>{
    const {email,password, skills=[]}= req.body
        try{
            const hashed = brcypt.hash(password,10 );
            User.create({email,password:hashed,skills});

        }
        catch(error){

        }
}
