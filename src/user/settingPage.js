import React, { useState } from "react";
import "./settingPage.css";

const SettingsPage = () => {
  const [userData, setUserData] = useState({
    username: "John Doe",
    email: "johndoe@example.com",
    phone: "1234567890",
  });

  const [editField, setEditField] = useState("");
  const [error, setError] = useState("");

  const validateInput = (field, value) => {
    if (field === "username" && !/^[a-zA-Z\s]+$/.test(value)) {
      return "Username must contain only alphabets and spaces.";
    }
    if (
      field === "email" &&
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(value)
    ) {
      return "Invalid email format.";
    }
    if (field === "phone" && !/^\d{10}$/.test(value)) {
      return "Phone number must be exactly 10 digits.";
    }
    return "";
  };

  const handleEdit = (field) => {
    setEditField(field);
    setError(""); // Clear error on edit
  };

  const handleSave = (field, value) => {
    const validationError = validateInput(field, value);
    if (validationError) {
      setError(validationError);
    } else {
      setUserData((prevData) => ({ ...prevData, [field]: value }));
      setEditField("");
      setError("");
    }
  };

  const handleKeyDown = (e, field, value) => {
    if (e.key === "Enter") {
      handleSave(field, value);
    }
  };

  return (
    <div className="settings-page">
      <h1 className="settings-title">Settings</h1>
      {error && <div className="error-message">{error}</div>}
      <div className="settings-item">
        <span className="settings-label">Username:</span>
        {editField === "username" ? (
          <input
            type="text"
            defaultValue={userData.username}
            onBlur={(e) => handleSave("username", e.target.value)}
            onKeyDown={(e) => handleKeyDown(e, "username", e.target.value)}
            autoFocus
          />
        ) : (
          <>
            <span className="settings-value">{userData.username}</span>
            <button onClick={() => handleEdit("username")}>Edit</button>
          </>
        )}
      </div>
      <div className="settings-item">
        <span className="settings-label">Email:</span>
        {editField === "email" ? (
          <input
            type="email"
            defaultValue={userData.email}
            onBlur={(e) => handleSave("email", e.target.value)}
            onKeyDown={(e) => handleKeyDown(e, "email", e.target.value)}
            autoFocus
          />
        ) : (
          <>
            <span className="settings-value">{userData.email}</span>
            <button onClick={() => handleEdit("email")}>Edit</button>
          </>
        )}
      </div>
      <div className="settings-item">
        <span className="settings-label">Phone:</span>
        {editField === "phone" ? (
          <input
            type="tel"
            defaultValue={userData.phone}
            onBlur={(e) => handleSave("phone", e.target.value)}
            onKeyDown={(e) => handleKeyDown(e, "phone", e.target.value)}
            autoFocus
          />
        ) : (
          <>
            <span className="settings-value">{userData.phone}</span>
            <button onClick={() => handleEdit("phone")}>Edit</button>
          </>
        )}
      </div>
    </div>
  );
};

export default SettingsPage;
