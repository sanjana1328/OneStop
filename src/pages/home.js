// src/pages/Home.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles.css';

function Home() {
    const navigate = useNavigate();

    return (
        <div className="home">
            <div className="main" id="home">
            <br/>
            <h1>One Stop - The Job Finder</h1><br/><br/>
            <p className="subtitle">Let Your Dream Job Find You By Matching Talents With Perfect Opportunities</p>
            <p className="subtitle">Your Future Begins With A Click</p>
            <div className="buttons">
                <button className="btn1" onClick={() => navigate('/signup')}>Sign Up</button>
                <button className="btn2" onClick={() => navigate('/login')}>Log In</button>
            </div></div>
            <div className="works">
                <section className="how-works">
                    <h2>How it works</h2>
                    <div className="steps-container">
                        <div className="step">
                            <h3>1. Search a job</h3>
                            <p>Explore a wide range of job opportunities tailored to your skills, experience, and location. Use our search filters to find the perfect fit for your career goals.</p>
                        </div>
                        <div className="step">
                            <h3>2. Apply for job</h3>
                            <p> Once you've found a job that interests you, easily submit your application with your resume and cover letter. Track your applications and manage them all in one place.</p>
                        </div>
                        <div className="step">
                            <h3>3. Get your job</h3>
                            <p>After applying, our platform connects you with employers. Receive interview invites and job offers directly through our system, helping you land your next job faster.</p>
                        </div>
                    </div>
                </section>
            </div>
            <div className="infos">
                <div id="about">
                    <h3>About Us</h3>
                    <p>At <b>OneStop-The Job Finder</b> , we are dedicated to bridging the gap between talent and opportunity. Our platform is designed to streamline the job search process, making it easier for individuals to find the right career path and for companies to connect with qualified professionals.</p>
                </div>
                <div id="motto">
                <h3>Our Motto</h3>
                    <p>Empowering professionals by seamlessly connecting them with premier career opportunities to drive organizational and personal success.<br/><br/>
                        "Your Path to Success Starts Here."
                    </p>
                </div>
                <div id="contact">
                <h3>Contact</h3>
                    <p>Phone: +91 8613031628</p>
                    <p>Email: onestop_thejobfinder@gmail.com</p>
                </div>
            </div>
            <footer>
                <div className="copyright">
                    <p>&copy; 2024 OneStop-The Job Finder. All Rights Reserved.</p>
                </div>
            </footer>
        </div>
    );
}

export default Home;