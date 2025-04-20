const express = require("express");
const Reviews = require("../models/reviewModel");

const app = express.Router();

app.get('/', async(req,res)=>{
    const { review, rating, pics, reviewer } = req.body;

    try{
        const reviews = await Reviews.find();

        if(!reviews) return res.status(500).json({message: "can't fetch the reviews"});

        res.status(200).json({message: "reviews fetched successfully"});
    }
    catch(err){
        console.error(err);
        res.status(err.status || 500).json({message: err.message});
    }
})

app.post('/', async(req,res)=>{
    const { review, rating, reviewer } = req.body;

    try{
        if(!review || !rating) return res.status(400).json({message: "all the fields are required"});

        const newReview = await new Reviews(review,rating,reviewer);
        newReview.save();    

        res.status(201).json({message: "review posted successfully"});
    }
    catch(err){
        console.error(err);
        res.status(err.status || 500).json({message: err.message});
    }
})