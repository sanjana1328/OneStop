// backend/utils/whatsapp.js
const twilio = require('twilio');

const sendWhatsAppNotification = (phoneNumber) => {
    const client = twilio('your_account_sid', 'your_auth_token');

    client.messages
        .create({
            body: 'Your job preferences have been processed successfully!',
            from: 'whatsapp:+14155238886', // Twilio WhatsApp number
            to: `whatsapp:${phoneNumber}`,
        })
        .then((message) => console.log('WhatsApp message sent: ' + message.sid))
        .catch((error) => console.error('Error sending WhatsApp message:', error));
};

module.exports = { sendWhatsAppNotification };
