import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import SettingsPage from './user/settingPage';
import NotificationPage from './user/notificationpage';
import PreferencesForm from './user/PreferencesForm';
import UserPreferences from './user/UserPreferences';
import PreferenceDetail from './user/PreferenceDetail';
import Home from './pages/home';
import SignUp from './pages/signup';
import Login from './pages/Login';
import JobList from './job/JobList';
import './App.css';

function AppContent() {
    const [preferences, setPreferences] = useState([]);
    const location = useLocation();

    // Define routes where the Sidebar should be displayed
    const sidebarRoutes = ['/preferences', '/preferences-form', '/preferences','/settingPage','/notificationpage/:id'];

    // Check if Sidebar should be visible on the current route
    const shouldShowSidebar = sidebarRoutes.some(route =>
        location.pathname.startsWith(route.replace(':id', ''))
    );

    const addPreference = (preference) => {
        setPreferences((prevPreferences) => [...prevPreferences, preference]);
    };

    return (
        <div className="app">
            <Header />
            <div className="main-content">
                {shouldShowSidebar && <Sidebar />}
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/signup" element={<SignUp />} />
                        <Route path="/login" element={<Login />} />
                        <Route path="/settingPage" element={<SettingsPage />} />
                        <Route path="/notificationpage" element={<NotificationPage />} />
                        <Route path="/preferences-form" element={<PreferencesForm addPreference={addPreference} />} />
                        <Route path="/preferences" element={<UserPreferences preferences={preferences} />} />
                        <Route path="/preferences/:id" element={<PreferenceDetail />} />
                        <Route path="/jobs" element={<JobList />} />
                    </Routes>
                </div>
            </div>
        </div>
    );
}

function App() {
    return (
        <Router>
            <AppContent />
        </Router>
    );
}

export default App;
