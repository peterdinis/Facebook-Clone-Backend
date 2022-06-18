import express, {Application} from "express";
import cors from "cors";
import dotenv from "dotenv";
import mongoose from "mongoose";

const app: Application = express();

app.use(cors())
app.use(express.json());
app.use(express.static('public')); 
app.use('/images', express.static('images'));

dotenv.config();

mongoose.connect(process.env.MONGODB_URI as string).then(() => {
    console.log("Connected")
})

app.listen(process.env.PORT, () => {
    console.log("Server Running on port 5000");
})