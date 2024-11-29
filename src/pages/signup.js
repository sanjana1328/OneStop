// src/pages/SignUp.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function SignUp() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ 
        name: '', 
        email: '', 
        phone: '', 
        password: '', 
        confirmPassword: '',
    });
    const [error, setError] = useState('');

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        //check if all fields are filled
        if (!formData.name || !formData.email || !formData.phone || !formData.password || !formData.confirmPassword) {
            setError('Please fill all fields');
            return;
        }

        // Check if passwords match
        if (formData.password !== formData.confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        try {
            // Send the form data to the backend
            const response = await fetch('http://localhost:5000/api/auth/signup', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (response.ok) {
                // If signup successful, redirect to home or login page
                // Assuming the backend sends a user object or token in response
                localStorage.setItem('user', JSON.stringify(data.user || formData));
                navigate('/');
            } else {
                setError(data.message || 'Something went wrong');
            }
        } catch (error) {
            setError('Server error. Please try again later.');
        }
    };

    return (
        <div className="body">
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <input type="text" name="name" placeholder="Name" pattern="[A-Za-z]+" title="Name should contain only alphabets (A-Z or a-z)" value={formData.name} onChange={handleChange} />
                <input type="email" name="email" placeholder="Email ID" pattern="[a-z0-9._%+-]+@[a-z]+\.[a-z]{2,}$" title="Please enter a valid email address (e.g., user@example.com)" value={formData.email} onChange={handleChange} />
                <input type="text" name="phone" placeholder="Phone No" pattern="\d{10}" title="Enter a valid phone number"value={formData.phone} onChange={handleChange} />
                <input type="password" name="password" placeholder="Password" pattern="(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}" 
    title="Password must be at least 8 characters long and include at least one uppercase letter, one lowercase letter, one number, and one special character (e.g., @$!%*?&)" value={formData.password} onChange={handleChange} />
                <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} />
                <button type="submit">Sign Up</button>
            </form>
            {error && <p className="error">{error}</p>}
        </div>
        </div>
    );
}

export default SignUp;