import React, { useEffect, useState } from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [userName, setUserName] = useState('');

    useEffect(() => {
        // Retrieve the user's name from localStorage
        const name = localStorage.getItem('name');
        if (name) {
            setUserName(name); // Set user's name in the state
        }
    }, []); // This effect runs once when the component mounts

    const handleLogout = () => {
        localStorage.removeItem('name');
        localStorage.removeItem('email');
        window.location.reload(); // Refresh the page or navigate to the login page
    };
    
    return (
        <aside className="sidebar">
            <div className="sidebar">
                {userName && <h3>Welcome, {userName}!</h3>} {/* Display user's name */}
                <Link to="/settingPage" id="links">Settings</Link>
                <Link to="/preferences" id="links">Preferences</Link>
                <Link to="/notificationpage" id="links">Notification</Link>
            </div>
        </aside>
    );
};

export default Sidebar;
