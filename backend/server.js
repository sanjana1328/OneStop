const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcrypt');

const app = express();
const PORT = process.env.PORT || 5000;
const { signup, login } = require('./controllers/authController');

// Middleware
app.use(cors({ 
    origin: 'http://localhost:3000',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true 
}));
app.use(express.json());

// Connect to `jobFinder` database
const jobFinderConnection = mongoose.createConnection('mongodb://localhost:27017/jobFinder');
jobFinderConnection.once('open', () => console.log('Connected to jobFinder database'));
jobFinderConnection.on('error', (err) => console.error('Error connecting to jobFinder:', err));

// Connect to `signupdb` database
const signupConnection = mongoose.createConnection('mongodb://localhost:27017/signupdb');
signupConnection.once('open', () => console.log('Connected to signupdb database'));
signupConnection.on('error', (err) => console.error('Error connecting to signupdb:', err));

// Schemas and Models
const preferenceSchema = new mongoose.Schema({ title: String, platformName: String });
const Preference = jobFinderConnection.model('Preference', preferenceSchema);

const userSchema = new mongoose.Schema({
    name: String,
    email: { type: String, unique: true },
    phone: String,
    password: String,
});
const User = signupConnection.model('User', userSchema);

// Signup API
app.post('/signup', async (req, res) => {
    try {
        const { name, email, phone, password } = req.body;
        if (!name || !email || !phone || !password) {
            return res.status(400).json({ message: 'All fields are required' });
        }
        const existingUser = await User.findOne({ email });
        if (existingUser) {
            return res.status(409).json({ message: 'Email already registered' });
        }
        const hashedPassword = await bcrypt.hash(password, 10);
        const newUser = new User({ name, email, phone, password: hashedPassword });
        await newUser.save();
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        console.error('Signup error:', error.stack);
        res.status(500).json({ message: 'Internal server error' });
    }
});
app.post('/login', async (req, res) => {
    const { email, password } = req.body;

    try {
        // Check if user exists
        const user = await User.findOne({ email });
        
        if (!user) {
            return res.status(404).json({ message: 'User not found' });
        }

        // Compare passwords
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(401).json({ message: 'Invalid credentials' });
        }

        // Login successful
        return res.status(200).json({ message: 'Login successful', user: { email: user.email, name: user.name } });
    } catch (error) {
        console.error('Error during login:', error);
        return res.status(500).json({ message: 'Internal server error' });
    }
});

// Start Server
app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

