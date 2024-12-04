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
        const { title, company, location: jobLocation, jobType, platformName } = preference;

        // Construct the job search URL based on the selected platform and preference details
        let searchURL = '';

        if (platformName === 'LinkedIn') {
            searchURL = `https://www.linkedin.com/jobs/search?keywords=${encodeURIComponent(title)}&location=${encodeURIComponent(jobLocation)}&f_TPR=r86400&f_JT=${encodeURIComponent(jobType)}&company=${encodeURIComponent(company)}`;
        } else if (platformName === 'Naukri') {
            searchURL = `https://www.naukri.com/jobs?keywords=${encodeURIComponent(title)}&location=${encodeURIComponent(jobLocation)}&company=${encodeURIComponent(company)}&jobType=${encodeURIComponent(jobType)}`;
        } else if (platformName === 'Indeed') {
            searchURL = `https://www.indeed.com/jobs?q=${encodeURIComponent(title)}&l=${encodeURIComponent(jobLocation)}&company=${encodeURIComponent(company)}&jt=${encodeURIComponent(jobType)}`;
        } else if (platformName === 'Glassdoor') {
            searchURL = `https://www.glassdoor.com/Job/jobs.htm?sc.keyword=${encodeURIComponent(title)}&locT=&locId=&jobType=${encodeURIComponent(jobType)}&company=${encodeURIComponent(company)}&jobLocation=${encodeURIComponent(jobLocation)}`;
        } else {
            alert("Please select a valid platform.");
            return;
        }

        // Open the search URL in a new tab
        window.open(searchURL, '_blank');
    };

    return (
        <div className="preference-detail">
            <div className="flash-card">
                <h2>{preference.title}</h2>
                <p><strong>Company:</strong> {preference.company || "N/A"}</p>
                <p><strong>Location:</strong> {preference.location || "N/A"}</p>
                <p><strong>Job Type:</strong> {preference.jobType || "N/A"}</p>
                <p><strong>Platform:</strong> {preference.platformName || "N/A"}</p>
                <button className="apply-button" onClick={handleApplyClick}>
                    Apply
                </button>
            </div>
        </div>
    );
}

export default PreferenceDetail;
