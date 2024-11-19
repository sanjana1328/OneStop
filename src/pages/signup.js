// src/pages/SignUp.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function SignUp() {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({ name: '', email: '', phone: '', password: '', confirmPassword: '' });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Save form data to localStorage for login validation
        localStorage.setItem('user', JSON.stringify(formData));
        navigate('/');
    };

    return (
        <div className="body">
        <div className="form-container">
            <form onSubmit={handleSubmit}>
                <h2>Sign Up</h2>
                <input type="text" name="name" placeholder="Name" value={formData.name} onChange={handleChange} />
                <input type="email" name="email" placeholder="Email ID" value={formData.email} onChange={handleChange} />
                <input type="text" name="phone" placeholder="Phone No" value={formData.phone} onChange={handleChange} />
                <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleChange} />
                <input type="password" name="confirmPassword" placeholder="Confirm Password" value={formData.confirmPassword} onChange={handleChange} />
                <button type="submit">Sign Up</button>
            </form>
        </div>
        </div>
    );
}

export default SignUp;