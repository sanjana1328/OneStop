// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => (
    <aside className="sidebar">
        <div className="sidebar">
            <Link to="/settingPage" id="links">Settings</Link>
            <Link to="/preferences" id="links">Preferences</Link>
            <Link to="/notificationpage"id="links">Notification</Link>
        </div>
    </aside>
);


export default Sidebar;