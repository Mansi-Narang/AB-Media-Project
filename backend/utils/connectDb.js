
import mongoose from "mongoose";
import logger from "./logger.js";

export default async function connectMongo(){
   logger.watch('Connecting you with our Database');
   await mongoose.connect("mongodb+srv://mansinarang155:BMm01zAr1I6qpUbw@ab-media.n2gxdiy.mongodb.net/?retryWrites=true&w=majority&appName=AB-Media")
}
