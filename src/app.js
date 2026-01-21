import express from "express"
import cors from "cors"
import cookieParser from "cookie-parser";

const app = express() // creates an instance of a web application.

app.use(cors({
    origin: process.env.CORS_ORIGIN,
    credentials: true,
}))

// what to accept ? -->
app.use(express.json({limit: "16kb"})); // My server can accept JSON data, but not larger than 16 kilobytes.
app.use(express.urlencoded({extended: true, limit: "16kb"}));
app.use(express.static("public")); // Allow the browser to access files inside the public folder.
app.use(cookieParser())

// export default app;
export {app};