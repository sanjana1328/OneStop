const mongoose = require('mongoose');

// Check if the model is already defined
const preferenceSchema = new mongoose.Schema({
    title: { type: String, required: true },
    company: String,
    location: String,
    jobType: String,
    platformName: { type: String, required: true },
});

module.exports = mongoose.models.Preference || mongoose.model('Preference', preferenceSchema);
