// src/job/JobList.js
import React from 'react';
import { useLocation } from 'react-router-dom';
import './styles.css';

function JobList() {
    const location = useLocation();
    const preference = location.state?.preference;

    const jobListings = [
        { id: 120475, title: 'Quality Analyst', company: 'Ash Healthcare Pvt Ltd', location: 'Chennai, Tamil Nadu', type: 'Remote' },
        { id: 120455, title: 'Quality Analyst', company: 'Walmart', location: 'Chennai, Tamil Nadu', type: 'Remote' },
        { id: 130505, title: 'Research Intern', company: 'TechCorp', location: 'Bangalore, Karnataka', type: 'Onsite' }
    ];

    const filteredJobs = jobListings.filter((job) => job.title === preference?.title);

    return (
        <div className="job-list">
            <h2>Job Listings for "{preference?.title}"</h2>
            {filteredJobs.length > 0 ? (
                filteredJobs.map((job) => (
                    <div key={job.id} className="job-card">
                        <h3>{job.title}</h3>
                        <p>{job.company}</p>
                        <p>{job.location}</p>
                        <p>{job.type}</p>
                        <button>Apply</button>
                    </div>
                ))
            ) : (
                <p>No jobs found for this preference.</p>
            )}
        </div>
    );
}

export default JobList;