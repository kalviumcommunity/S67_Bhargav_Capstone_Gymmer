const mongoose = require("mongoose");
require('dotenv').config();

const MONGO_URI = process.env.MONGO_URI;

const connectDB = async()=>{
    try{
        await mongoose.connect(MONGO_URI);
        console.log("Successfully connected to Database 👍");
    }
    catch(error){
        console.log("Error connecting to database ❌", error.message);
    }
}

module.exports = connectDB;