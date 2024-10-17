import mongoose from "mongoose";
import validator from "validator";


const userSchema = new mongoose.Schema({}, { timestamps: true });

export const User = mongoose.model("User", userSchema);
