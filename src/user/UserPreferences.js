// src/user/UserPreferences.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function UserPreferences({ preferences }) {
    const navigate = useNavigate();

    const handlePreferenceClick = (preference) => {
        navigate(`/preferences/${preference.id}`, { state: { preference } });
    };

    return (
        <div className="user-preferences">
            <h2>Your Preferences</h2>
            {preferences.length === 0 ? (
                <p>No preferences submitted yet.</p>
            ) : (
                preferences.map((preference) => (
                    <div
                        key={preference.id}
                        className="preference-card"
                        onClick={() => handlePreferenceClick(preference)}
                    >
                        <h3>{preference.title}</h3>
                        <span>&#x279C;</span>
                    </div>
                ))
            )}
        </div>
    );
}

export default UserPreferences;