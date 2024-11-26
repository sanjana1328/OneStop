import React, { useState } from "react";
import Sidebar from "../components/Sidebar";  // Import Sidebar
import "./notificationpage.css";

const NotificationPage = () => {
  const [notificationType, setNotificationType] = useState("");
  const [frequency, setFrequency] = useState([]);

  const handleNotificationChange = (type) => {
    setNotificationType(type);
  };

  const handleFrequencyChange = (value) => {
    setFrequency((prev) =>
      prev.includes(value)
        ? prev.filter((item) => item !== value)
        : [...prev, value]
    );
  };

  return (
    <div className="notification-page">
      {/* Include Sidebar */}
      <Sidebar />
      <div className="content">
        <h2>Notification:</h2>
        <div className="notification-options">
          <label>
            <input
              type="radio"
              name="notification"
              value="Whatsapp"
              checked={notificationType === "Whatsapp"}
              onChange={() => handleNotificationChange("Whatsapp")}
            />
            Whatsapp
          </label>
          <label>
            <input
              type="radio"
              name="notification"
              value="Email"
              checked={notificationType === "Email"}
              onChange={() => handleNotificationChange("Email")}
            />
            Email
          </label>
          <label>
            <input
              type="radio"
              name="notification"
              value="Whatsapp"
              checked={notificationType === "Whatsapp"}
              onChange={() => handleNotificationChange("Whatsapp")}
            />
            Both
          </label>
        </div>
        <h2>Frequency:</h2>
        <div className="frequency-options">
          <label>
            <input
              type="checkbox"
              value="Daily"
              checked={frequency.includes("Daily")}
              onChange={() => handleFrequencyChange("Daily")}
            />
            Daily
          </label>
          <label>
            <input
              type="checkbox"
              value="Weekly"
              checked={frequency.includes("Weekly")}
              onChange={() => handleFrequencyChange("Weekly")}
            />
            Weekly
          </label>
          <label>
            <input
              type="checkbox"
              value="Monthly"
              checked={frequency.includes("Monthly")}
              onChange={() => handleFrequencyChange("Monthly")}
            />
            Monthly
          </label>
        </div>
      </div>
    </div>
  );
};

export default NotificationPage;
