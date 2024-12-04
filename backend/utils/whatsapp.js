// File: backend/utils/whatsapp.js

const twilio = require("twilio");

const sendWhatsAppMessage = (phoneNumber, message) => {
    const client = twilio("your_twilio_account_sid", "your_twilio_auth_token");
    client.messages
        .create({
            body: message,
            from: "whatsapp:+14155238886", // Your Twilio WhatsApp number
            to: `whatsapp:${phoneNumber}`,
        })
        .then((message) => console.log("Message sent:", message.sid))
        .catch((error) => console.error("Error sending message:", error));
};

module.exports = { sendWhatsAppMessage };
