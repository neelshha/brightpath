import express from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";

import { connectDB } from "./database/connectDB.js";
import authRoutes from "./routes/auth.route.js";

dotenv.config();

const app = express();

// Configure CORS middleware
app.use(cors({
  origin: 'http://localhost:5173', // Allow requests only from your frontend
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Specify allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
  credentials: true, // If using cookies, credentials need to be set to true
}));

// Manually handle preflight OPTIONS request if needed
app.options('*', cors()); // This will allow CORS for all routes

// Middleware to parse JSON and cookies
app.use(express.json()); // Allows us to parse incoming JSON requests: req.body
app.use(cookieParser()); // Allows us to parse incoming cookies

// Set up routes
app.use("/api/auth", authRoutes);

// Start the server and connect to the database
app.listen(3000, () => {
    connectDB(); // Connect to the database when the server starts
    console.log("Server is running on port: ", 3000);
});
