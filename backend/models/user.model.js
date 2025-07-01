import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {  type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    isAdmin: { type: Boolean, default: false },
    profilePicture: { type: String, default: "" },
    bio: { type: String, default: "" },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
}, {
  timestamps: true,
  
}); 


const User = mongoose.model("User", userSchema);
export default User;