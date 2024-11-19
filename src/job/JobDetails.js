// src/job/JobDetail.js
import React from 'react';
import './styles.css';

const JobDetail = ({ job }) => (
    <div className="job-detail">
        <h2>{job.jobTitle} - {job.companyName}</h2>
        <p>Location: {job.location}</p>
        <p>Job Type: {job.jobType}</p>
    </div>
);

export default JobDetail;