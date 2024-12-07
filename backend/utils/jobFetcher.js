// File: utils/jobFetcher.js
const axios = require("axios");
const Job = require("../models/job");

const fetchJobs = async (preferences) => {
    try {
        for (const preference of preferences) {
            // Example: Mock job-fetching API (replace with actual API URLs)
            const response = await axios.get(`https://api.example.com/jobs`, {
                params: {
                    title: preference.title,
                    location: preference.location,
                },
            });

            const jobs = response.data; // Format based on the API response

            // Save matching jobs to the database
            for (const job of jobs) {
                await Job.create({
                    title: job.title,
                    company: job.company,
                    location: job.location,
                    applyLink: job.applyLink,
                    description: job.description,
                    postedDate: job.postedDate,
                    matchingPreferences: [preference._id], // Link to preference
                });
            }
        }
    } catch (error) {
        console.error("Error fetching jobs:", error);
    }
};

module.exports = fetchJobs;
