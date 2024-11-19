// src/user/PreferenceDetail.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import './styles.css';

function PreferenceDetail() {
    const location = useLocation();
    const preference = location.state?.preference;

    if (!preference) {
        return <p>No preference details available.</p>;
    }

    const handleApplyClick = () => {
        alert(`You have applied for ${preference.title} at ${preference.company}`);
    };

    return (
        <div className="preference-detail">
            <div className="flash-card">
                <h2>{preference.title}</h2>
                <p><strong>Company:</strong> {preference.company || "N/A"}</p>
                <p><strong>Location:</strong> {preference.location || "N/A"}</p>
                <p><strong>Job Type:</strong> {preference.jobType || "N/A"}</p>
                <button className="apply-button" onClick={handleApplyClick}>
                    Apply
                </button>
            </div>
        </div>
    );
}

export default PreferenceDetail;