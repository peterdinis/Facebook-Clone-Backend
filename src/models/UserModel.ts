import mongoose from "mongoose";
import {IUser} from "../types/IUser"

const UserSchema = new mongoose.Schema<IUser> (
    {
        username: {
            type: String,
            required: true
        },
        password : {
            type: String,
            required: true
        },
        firstname: {
            type: String,
            required: true
        },
        lastname : {
            type: String,
            required: true
        },
        isAdmin : {
            type: Boolean,
            default: false,
        },
        profilePicture: String,
        coverPicture: String,
        about: String,
        livesin: String,
        worksAt: String,
        relationship: String,
        followers: [] ,
        following: []
    },
    {timestamps: true}
)

const UserModel = mongoose.model("TUsers", UserSchema);
export default UserModel