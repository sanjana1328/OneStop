// File: src/pages/JobSearch.js

import React, { useState, useEffect } from "react";
import axios from "axios";

const JobSearch = ({ preferences }) => {
    const [jobs, setJobs] = useState([]);

    useEffect(() => {
        const fetchJobs = async () => {
            try {
                const response = await axios.post("/api/jobs/search", preferences);
                setJobs(response.data);
            } catch (error) {
                console.error("Error fetching jobs:", error);
            }
        };

        if (preferences) {
            fetchJobs();
        }
    }, [preferences]);

    return (
        <div>
            <h2>Job Search Results</h2>
            {jobs.length === 0 ? (
                <p>No jobs found based on your preferences.</p>
            ) : (
                jobs.map((job) => (
                    <div key={job.id}>
                        <h3>{job.title}</h3>
                        <p>{job.company}</p>
                        <p>{job.location}</p>
                    </div>
                ))
            )}
        </div>
    );
};

export default JobSearch;
