// src/user/PreferencesForm.js
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function PreferencesForm({ addPreference }) {
    const [formData, setFormData] = useState({
        title: '',
        company: '',
        location: '',
        jobType: '',
        platformName: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (formData.title) {
            addPreference({ id: Date.now(), ...formData });
            navigate('/preferences');
        }
    };

    return (
        <form className="preferences-form" onSubmit={handleSubmit}>
            <legend><h3 className="title">Preference Form</h3></legend>
            <label>
                Job Title
                <select className="options" name="title" value={formData.title} onChange={handleChange} required>
                    <option value="" disabled>Select Job Title</option>
                    <option value="Software Engineer">Software Engineer</option>
                    <option value="Product Manager">Product Manager</option>
                    <option value="Data Analyst">Data Analyst</option>
                    <option value="UI/UX Designer">UI/UX Designer</option>
                </select>
            </label>
            <label>
                Company
                <select className="options" name="company" value={formData.company} onChange={handleChange}>
                    <option value="" disabled>Select Company</option>
                    <option value="Google">Google</option>
                    <option value="Microsoft">Microsoft</option>
                    <option value="Amazon">Amazon</option>
                    <option value="Apple">Apple</option>
                </select>
            </label>
            <label>
                Location
                <select className="options" name="location" value={formData.location} onChange={handleChange}>
                    <option value="" disabled>Select Location</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="New York">New York</option>
                    <option value="San Francisco">San Francisco</option>
                </select>
            </label>
            <label>
                Job Type
                <select className="options" name="jobType" value={formData.jobType} onChange={handleChange}>
                    <option value="" disabled>Select Job Type</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Internship">Internship</option>
                    <option value="Contract">Contract</option>
                </select>
            </label>
            <label>
                Platform
                <select className="options" name="platformName" value={formData.platformName} onChange={handleChange}>
                    <option value="" disabled>Select Platform</option>
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="Indeed">Indeed</option>
                    <option value="Glassdoor">Glassdoor</option>
                    <option value="Naukri">Naukri</option>
                </select>
            </label>
            
            <button type="submit">Submit</button>
        </form>
    );
}

export default PreferencesForm;
