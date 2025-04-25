const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    review: {type: String, minLength: 10,maxLength: 200, required: true},
    rating: {type: Number, min: 1, max: 5,required: true},
    pics: {type: [String], default: []},
    reviewer: {type: mongoose.Schema.Types.ObjectId, ref: 'user', required: true}
});

module.exports = mongoose.model("review",reviewSchema);