import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables from .env file

const app = express();
const port = process.env.PORT || 3000;

// MongoDB connection
const mongoDbUrl = process.env.MONGODB_URL || '';

mongoose.connect(mongoDbUrl, {

})
.then(() => {
  console.log("Connected to MongoDB!");
})
.catch((error) => {
  console.error("Error connecting to MongoDB:", error);
});



