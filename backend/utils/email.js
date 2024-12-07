const nodemailer = require("nodemailer");

const sendJobNotification = async (user, jobs) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "your_email@gmail.com",
            pass: "your_password",
        },
    });

    const jobLinks = jobs.map(job => `<a href="${job.applyLink}">${job.title}</a>`).join("<br>");

    const mailOptions = {
        from: "your_email@gmail.com",
        to: user.email,
        subject: "New Jobs Matching Your Preferences!",
        html: `<h3>Jobs for you:</h3>${jobLinks}`,
    };

    await transporter.sendMail(mailOptions);
};

module.exports = sendJobNotification;
