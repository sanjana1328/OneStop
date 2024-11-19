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
                Job Title:
                <input type="text" name="title" value={formData.title} onChange={handleChange} required />
            </label>
            <label>
                Company:
                <input type="text" name="company" value={formData.company} onChange={handleChange} />
            </label>
            <label>
                Location:
                <input type="text" name="location" value={formData.location} onChange={handleChange} />
            </label>
            <label>
                Job Type:
                <input type="text" name="jobType" value={formData.jobType} onChange={handleChange} />
            </label>
            <label>
                Platform:
                <input type="text" name="platformName" value={formData.platformName} onChange={handleChange} />
            </label>
            
            <button type="submit">Submit</button>
        </form>
    );
}

export default PreferencesForm;