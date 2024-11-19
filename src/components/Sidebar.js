// src/components/Sidebar.js
import React from 'react';
import './Sidebar.css';
import { Link } from 'react-router-dom';

const Sidebar = () => (
    <aside className="sidebar">
        <div className="sidebar">
            <Link to="/profile" id="links">Profile</Link>
            <Link to="/settings" id="links">Settings</Link>
            <Link to="/preferences" id="links">Preferences</Link>
            <Link to="/notifications"id="links">Notification</Link>
        </div>
    </aside>
);


export default Sidebar;