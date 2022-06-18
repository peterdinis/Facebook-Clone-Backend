import express, {Application} from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";
import authRoutes from "./routes/authRoutes";
import userRoutes from "./routes/userRoutes";

const app: Application = express();

app.use(cors())
app.use(express.json());
app.use(express.static('public')); 
app.use('/images', express.static('images'));
app.use("/auth", authRoutes);
app.use("/user", userRoutes);
dotenv.config();

mongoose.connect(process.env.MONGODB_URI as string).then(() => {
    console.log("Connected")
})

app.listen(process.env.PORT, () => {
    console.log("Server Running on port 5000");
})