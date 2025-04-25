const mongoose = require("mongoose");

const gymSchema = new mongoose.Schema({
    name: {type: String, required: true},
    location: {address: { type: String, required: true }, city: { type: String, required: true },
        pincode: {
          type: String,
          required: true,
          match: [/^\d{6}$/, 'Enter a valid 6-digit pincode']
        }
      },
      pricing: {
        perDay: { type: Number, required: true, min: 0 },
        plans: [{
            title: { type: String, required: true },
            durationDays: { type: Number, required: true }, 
            price: { type: Number, required: true, min: 1 }
          }]
      },      
    ownedBy: {type: mongoose.Schema.Types.ObjectId,ref: 'owner', required: true},  
    pics: {type: [String], default: [], required: true},
    about: {type: String,minlength: [10,'minimum 10 characters'], maxlength: [200,'maximum limit Exceeded'], default: ''},
    reviews: {type: [{type: mongoose.Schema.Types.ObjectId, ref: 'review'}], default: []}
})

module.exports = mongoose.model("gym",gymSchema);