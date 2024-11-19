// src/api/jobApi.js
export const fetchJobsByTitle = (title) => {
    // Return mock data based on title
    return [
        { jobTitle: title, companyName: 'Company A', location: 'Remote', jobType: 'Full-time', },
        { jobTitle: title, companyName: 'Company B', location: 'Onsite', jobType: 'Part-time' }
    ];
};