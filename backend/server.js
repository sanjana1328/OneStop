// File: backend/server.js

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');

const app = express();
const PORT = 5001;

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/jobFinder', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
    .then(() => console.log('Connected to MongoDB'))
    .catch((err) => console.error('Error connecting to MongoDB:', err));

// Preference Schema
const preferenceSchema = new mongoose.Schema({
    title: { type: String, required: true },
    company: { type: String },
    location: { type: String },
    jobType: { type: String },
    platformName: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
});

app.get('/api/preferences', async (req, res) => {
    try {
        const preferences = await Preference.find();
        res.status(200).json(preferences);
    } catch (err) {
        console.error('Error fetching preferences:', err.message);
        res.status(500).send({ message: 'Failed to fetch preferences' });
    }
});


// Preference Model
const Preference = mongoose.model('Preference', preferenceSchema);

// API Route to Save Preferences
app.post('/api/preferences', async (req, res) => {
    try {
        const { title, company, location, jobType, platformName } = req.body;

        // Basic validation
        if (!title || !platformName) {
            return res.status(400).json({ error: 'Title and Platform are required' });
        }

        const newPreference = new Preference({
            title,
            company,
            location,
            jobType,
            platformName,
        });

        await newPreference.save();
        console.log('Saved to database:', newPreference);
        res.status(201).json({ message: 'Preference saved successfully' });
    } catch (error) {
        console.error('Error saving preference:', error);
        res.status(500).json({ error: 'Failed to save preference' });
    }
});

// API Route to Get All Preferences (Optional)
app.get('/api/preferences', async (req, res) => {
    try {
        const preferences = await Preference.find();
        res.status(200).json(preferences);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch preferences' });
    }
});

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
