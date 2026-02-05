import User from "../models/User.js";
import generateToken from "../utils/generateToken.js";
import bcrypt from "bcryptjs"

export const registerUser =async (req,res) => {
    const {name,email,password} =req.body;

    const existingUser = await User.findOne({email})
    if(existingUser){
        return res.status(400).json("User already exists")
    }
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password,salt)

    const user = await User.create({
        name,
        email,
        password:hashedPassword
    });

    res.status(201).json({
        token:generateToken(user._id),
        user:{
            id:user._id,
            name:user.name,
            email:user.email,
        },
    })
    res.send("hello")
}