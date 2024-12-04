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

    const handleSubmit = (e) => {
        e.preventDefault();
        const { title, company, location, jobType, platformName, otherTitle, otherCompany, otherLocation, otherJobType } = formData;

        // Use custom input if the "Other" option was selected
        const finalTitle = title === 'Other' ? otherTitle : title;
        const finalCompany = company === 'Other' ? otherCompany : company;
        const finalLocation = location === 'Other' ? otherLocation : location;
        const finalJobType = jobType === 'Other' ? otherJobType : jobType;

        // Add preference only if a title is selected
        if (finalTitle) {
            addPreference({
                id: Date.now(),
                title: finalTitle,
                company: finalCompany,
                location: finalLocation,
                jobType: finalJobType,
                platformName
            });

            // Redirect to the preferences page with the selected preferences
            navigate('/preferences', {
                state: {
                    title: finalTitle,
                    company: finalCompany,
                    location: finalLocation,
                    jobType: finalJobType,
                    platformName
                }
            });
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
