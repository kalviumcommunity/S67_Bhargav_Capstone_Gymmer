const express = require("express");
const bcrypt = require("bcryptjs");
const user = require("../models/userModel");
const jwt = require("jsonwebtoken");
const verifyToken = require("../middlewares/authMiddleware");

const app = express.Router();

app.post('/signup', async(req,res)=>{
    const { name, email, password, bio, profilePic } = req.body;

    try{
        if (!name || !email || !password) return res.status(400).json({ message: "All required fields must be filled" });

        const userExists = await user.findOne({ email });
        if(userExists) return res.status(400).json({message: "This email is in use, kindly Login!"});

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await new user({ name, email, password: hashedPassword, bio, profilePic }).save();

        const token = jwt.sign(
            { id: newUser._id, name: newUser.name },
            process.env.JWT_SECRET,
            { expiresIn: process.env.JWT_EXPIRE }
          );

        res.status(201).json({message: `Hello ${newUser.name}, User is successfully created!`},token);
    }
    catch(err){
        console.error(err);
        res.status(err.status || 500).json({message: err.message});
    }
});

app.post('/login', async(req,res)=>{
    const { email, password} = req.body;

    if(!email || !password) return res.status(400).json({message: "All fields are required!"});

    const userExists = await user.findOne({email});
    if(!userExists) return res.status(400).json({message: "User doesn't exist!!"});

    const matchPassword = await bcrypt.compare(password, userExists.password);
    if(!matchPassword) return res.status(400).json({message: "Incorrect password!"});

    const token = jwt.sign(
        { id: userExists._id, name: userExist.name },
        process.env.JWT_SECRET,
        { expiresIn: process.env.JWT_EXPIRE }
      );

      res.status(200)
        .header("Authorization", `Bearer ${token}`)
        .json({ message: `Hello ${userExists.name},Welcome to Gymmer 💪`});   
});

app.get("/profile", verifyToken, (req, res) => {
    res.status(200).json({ message: `Welcome, ${req.user.name}` });
  });

module.exports = app;