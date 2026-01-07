//require('dotenv').config({path: './env'})

import dotenv from "dotenv"
import mongoose from "mongoose" 
import {DB_NAME} from "./constants.js";
import connectDB from "./db/index.js";

dotenv.config({
    path: './.env'
})

connectDB()



















import express from "express";
const app = express()

// function connectDB() {

// }

// connectDB()

/*
;( async () => {
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        // .on() is an event listener and 
        // When an error event occurs in the app, run this function.
        app.on("error", (error) => {
            console.log("Error by express", error);
            throw error;
        });

        // This is the "On Switch." It tells your server to bind to a specific channel (Port) on your computer 
        // and start waiting for users to send requests (like loading a webpage).
        app.listen(process.env.PORT, () => {
            console.log(`App is listening on port ${process.env.PORT}`);
        });

    } catch(error) { // error is just a parameter name (you could name it anything).
        console.error("ERROR: ", error);
        throw error;
    }
})()
*/