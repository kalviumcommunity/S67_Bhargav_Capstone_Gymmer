const express = require("express");
const connectDB = require("./config/db");
const routes = require("./routes/userAuth");
require('dotenv').config();

const app = express();
app.use(express.json());

const PORT = process.env.PORT || 8080;

app.get('/',(req,res)=>{
    res.send("Welcome to Gymmer 💪");
});

connectDB();

app.use("/api/auth", routes);

app.listen(PORT,()=>{
    console.log(`Server is running on http://localhost:${PORT}`)
});