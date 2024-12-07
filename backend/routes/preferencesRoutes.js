const express = require('express');
const Preference = require('../models/preference'); // Adjust the path as necessary
const router = express.Router();

// Save a new preference
router.post('/', async (req, res) => {
    const { title, company, location, jobType, platformName } = req.body;

    try {
        if (!title || !platformName) {
            return res.status(400).json({ message: 'Job title and platform name are required' });
        }

        const newPreference = new Preference({ title, company, location, jobType, platformName });
        await newPreference.save();

        res.status(201).json({ message: 'Preference saved successfully', id: newPreference._id });
    } catch (error) {
        console.error('Error saving preference:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});

// Get all preferences
router.get('/', async (req, res) => {
    try {
        const preferences = await Preference.find();
        res.status(200).json(preferences);
    } catch (error) {
        console.error('Error fetching preferences:', error);
        res.status(500).json({ message: 'Internal Server Error', error: error.message });
    }
});


module.exports = router;
