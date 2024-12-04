// File: backend/server.js

const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const nodemailer = require("nodemailer");
const { sendWhatsAppMessage } = require("./utils/whatsapp");

const app = express();
const port = process.env.PORT || 5001;

app.use(cors());
app.use(bodyParser.json());

app.post("/api/jobs/search", (req, res) => {
    const { title, location, platform } = req.body;
    // Fetch jobs based on user preferences from a mock database
    const jobs = [
        { id: 1, title: "Software Engineer", company: "Company A", location: "New York" },
        { id: 2, title: "Frontend Developer", company: "Company B", location: "California" },
        // Add more mock jobs as needed
    ];

    const filteredJobs = jobs.filter(
        (job) =>
            (title ? job.title.includes(title) : true) &&
            (location ? job.location.includes(location) : true)
    );

    res.json(filteredJobs);
});

// Mock route for sending email notifications
app.post("/api/notify", (req, res) => {
    const { notificationType, email, phoneNumber } = req.body;
    if (notificationType === "email") {
        sendEmailNotification(email);
    } else if (notificationType === "whatsapp") {
        sendWhatsAppMessage(phoneNumber, "Your job preferences have been processed!");
    }
    res.send("Notification sent!");
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
