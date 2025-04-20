const express = require("express");
const gym = require("../models/gymModel");

const app = express.Router();

app.get('/', async(req,res)=>{
    const { name, location, pricing, pics, ownedBy, about, reviews } = req.body;

    try{
        const Gyms = await gym.find();

        if(!gyms) return res.status(500).json({message: "can't fetch the gyms"});

        res.status(200).json({message: "gyms fetched successfully"});
    }
    catch(err){
        console.error(err);
        res.status(err.status || 500).json({message: err.message});
    }
})