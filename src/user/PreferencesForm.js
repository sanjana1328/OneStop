// File: src/user/PreferencesForm.js

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios'; // Ensure axios is installed: npm install axios
import './styles.css';

function PreferencesForm({ addPreference }) {
    const [formData, setFormData] = useState({
        title: '',
        company: '',
        location: '',
        jobType: '',
        platformName: '',
        otherTitle: '',
        otherCompany: '',
        otherLocation: '',
        otherJobType: ''
    });
    const navigate = useNavigate();

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({ ...prevData, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { title, company, location, jobType, platformName, otherTitle, otherCompany, otherLocation, otherJobType } = formData;
    
        // Use custom input if the "Other" option was selected
        const finalTitle = title === 'Other' ? otherTitle : title;
        const finalCompany = company === 'Other' ? otherCompany : company;
        const finalLocation = location === 'Other' ? otherLocation : location;
        const finalJobType = jobType === 'Other' ? otherJobType : jobType;

        // Validate required fields
        if (!finalTitle || !platformName) {
            alert('Job Title and Platform are required.');
            return;
        }

        // Add checks for 'Other' fields if needed
        if (title === 'Other' && !otherTitle) {
            alert('Please enter a valid job title.');
            return;
        }
        if (company === 'Other' && !otherCompany) {
            alert('Please enter a valid company name.');
            return;
        }
        if (location === 'Other' && !otherLocation) {
            alert('Please enter a valid location.');
            return;
        }
        if (jobType === 'Other' && !otherJobType) {
            alert('Please enter a valid job type.');
            return;
        }

        const preferenceData = {
            title: finalTitle,
            company: finalCompany,
            location: finalLocation,
            jobType: finalJobType,
            platformName
        };

        console.log('Preference Data:', preferenceData); // Log preference data
    
        try {
            // Send data to backend
            const response = await axios.post('http://localhost:5000/api/preferences', preferenceData);
            console.log('Response:', response.data);
    
            // Add preference to state (if necessary)
            addPreference({
                id: response.data.id || Date.now(), // Adjust based on backend response
                ...preferenceData
            });
    
            // Redirect to the preferences page with the selected preferences
            navigate('/preferences', {
                state: preferenceData,
            });
        } catch (error) {
            console.error('Error saving preference:', error.response?.data || error.message);
            console.log('Error details:', error);
            alert('Failed to save preference. Please check the console for details.');
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
                    <option value="Other">Other</option>
                </select>
                {formData.title === 'Other' && (
                    <input
                        type="text"
                        name="otherTitle"
                        value={formData.otherTitle}
                        onChange={handleChange}
                        placeholder="Enter Job Title"
                    />
                )}
            </label>
            
            <label>
                Company
                <select className="options" name="company" value={formData.company} onChange={handleChange}>
                    <option value="" disabled>Select Company</option>
                    <option value="Google">Google</option>
                    <option value="Microsoft">Microsoft</option>
                    <option value="Amazon">Amazon</option>
                    <option value="Apple">Apple</option>
                    <option value="Other">Other</option>
                </select>
                {formData.company === 'Other' && (
                    <input
                        type="text"
                        name="otherCompany"
                        value={formData.otherCompany}
                        onChange={handleChange}
                        placeholder="Enter Company"
                    />
                )}
            </label>
            
            <label>
                Location
                <select className="options" name="location" value={formData.location} onChange={handleChange}>
                    <option value="" disabled>Select Location</option>
                    <option value="Bangalore">Bangalore</option>
                    <option value="Mumbai">Mumbai</option>
                    <option value="New York">New York</option>
                    <option value="San Francisco">San Francisco</option>
                    <option value="Other">Other</option>
                </select>
                {formData.location === 'Other' && (
                    <input
                        type="text"
                        name="otherLocation"
                        value={formData.otherLocation}
                        onChange={handleChange}
                        placeholder="Enter Location"
                    />
                )}
            </label>
            
            <label>
                Job Type
                <select className="options" name="jobType" value={formData.jobType} onChange={handleChange}>
                    <option value="" disabled>Select Job Type</option>
                    <option value="Full-time">Full-time</option>
                    <option value="Part-time">Part-time</option>
                    <option value="Internship">Internship</option>
                    <option value="Contract">Contract</option>
                    <option value="Other">Other</option>
                </select>
                {formData.jobType === 'Other' && (
                    <input
                        type="text"
                        name="otherJobType"
                        value={formData.otherJobType}
                        onChange={handleChange}
                        placeholder="Enter Job Type"
                    />
                )}
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
