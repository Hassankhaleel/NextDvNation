import User from "../models/user.model.js";
import bcrypt from 'bcrypt'
import generateToken from '../utils/generateToken.js'

export  const registerUser = async (req, res) => {

    try {

        const {username, email, password} = req.body;
    
        if(!username || !email || !password){
            return res.status(400).json({message: "All fields are required"});
        }

        const existingUser = await User.findOne({$or: [{email}, {username}]});

        if(existingUser){
            return res.status(409).json({message: "Username or Email is already in use"});  
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password, salt);

        const newUser = new User({
            username,
            email,
            password: hashedPassword
        })

        await newUser.save()

        res.status(201).json({ message: "User registered successfully" });
        
    } catch (err) {
            console.error("Registration Error:", err);
            res.status(500).json({ message: "Server Error" });
    }

}


export const loginUser = async (req, res) => {
    try {

        const {username, password} = req.body;
        
        if(!username || !password){
            return res.status(400).json({ message: "All fields are required" });
        }

        const user = await User.findOne({ username })

        if(!user){
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password)
        if(!isMatch){
            return res.status(401).json({ message: "Invalid credentials" });
        }

        const token = generateToken(user._id);

        res.cookie('token', token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === 'production', // only true in production
            sameSite: 'Lax', // 'None' if frontend on different domain and using HTTPS
            maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
        });

        res.status(200).json({
        _id: user._id,
        username: user.username,
        email: user.email,
        message: "Login successful"
        });
                
    } catch (err) {
            console.error("Registration Error:", err.message);
            res.status(500).json({ message: "Server Error" });
    }
}

export const logoutUser = async (req, res) => {
  res.cookie('token', '', {
    httpOnly: true,
    expires: new Date(0),
  });

  res.status(200).json({ message: 'Logged out successfully' });
};


export const getUserProfile = async (req, res) => {
  try {
    const user = req.user; // added from JWT middleware

    res.status(200).json({
      _id: user._id,
      username: user.username,
      email: user.email,
      isAdmin: user.isAdmin,
      profilePicture: user.profilePicture,
      bio: user.bio,
      createdAt: user.createdAt,
    });
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};
