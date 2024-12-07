//backend/routes/authRoutes.js
const express = require('express');
const { signup, login } = require('../controllers/authController'); // Add login to imports
const { default: login } = require('../../src/pages/Login');
const router = express.Router();

// POST route for user signup
router.post('/signup', signup);

// POST route for user login
router.post('/login', login);

module.exports = router;