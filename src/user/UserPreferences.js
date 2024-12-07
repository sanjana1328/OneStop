import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function UserPreferences() {
    const [preferences, setPreferences] = useState([]);
    const navigate = useNavigate();

    // Fetch preferences from the database
    useEffect(() => {
        const fetchPreferences = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/preferences');
                if (!response.ok) {
                    throw new Error('Failed to fetch preferences');
                }
                const data = await response.json();
                setPreferences(data);
            } catch (error) {
                console.error('Error fetching preferences:', error);
            }
        };

        fetchPreferences();
    }, []);

    const handlePreferenceClick = (preference) => {
        navigate(`/preferences/${preference._id}`, { state: { preference } });
    };

    return (
        <div className="user-preferences">
            <h2>Your Preferences</h2>
            {preferences.length === 0 ? (
                <p>No preferences submitted yet.</p>
            ) : (
                preferences.map((preference) => (
                    <div
                        key={preference._id}
                        className="preference-card"
                        onClick={() => handlePreferenceClick(preference)}
                    >
                        <h3>{preference.title}</h3>
                        <h4>{preference.company}</h4>
                        <h5>{preference.location}</h5>
                        <span>&#x279C;</span>
                    </div>
                ))
            )}
        </div>
    );
}

export default UserPreferences;
