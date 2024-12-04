// File: backend/utils/email.js

const nodemailer = require("nodemailer");

const sendEmailNotification = (email) => {
    const transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "your_email@gmail.com", // Your email
            pass: "your_email_password", // Your email password or App password
        },
    });

    const mailOptions = {
        from: "your_email@gmail.com",
        to: email,
        subject: "Job Preferences Processed",
        text: "Your job preferences have been processed successfully!",
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.log(error);
        } else {
            console.log("Email sent: " + info.response);
        }
    });
};

module.exports = { sendEmailNotification };
