//require('dotenv').config({path: './.env'})
// import app from "./app.js"

import dotenv from "dotenv";
import mongoose from "mongoose";
import { DB_NAME } from "./constants.js";
import connectDB from "./db/index.js"; // connects your app to MongoDB
import express from "express";
const app = express(); // Creates an Express application instance

// 2nd approach
dotenv.config({
  path: "./.env",
});

connectDB()
  .then(() => {
    app.on("error", (error) => { // Listen for Express server errors
      console.log("Error by express", error);
      //   throw error;
    });

    const PORT = process.env.PORT || 8000;

    app.listen(PORT, () => { // Starts the HTTP server
      console.log(`Server is running at port : ${PORT}`);
    });
  })
  .catch((err) => {
    console.log("Mongo DB connection failed !!!", err);
  });







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
