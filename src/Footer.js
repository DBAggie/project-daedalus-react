import React from 'react';
import GitHubLogo from './resources/GitHub-Mark/PNG/GitHub-Mark-Light-32px.png';
import LinkedInLogo from './resources/LinkedIn-Logos/LI-In-Bug-32px.png';
import './styles/Footer-styles.css';

export const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <div className="header-nav">
                    <button className="nav-item" value='Home'>Home</button>
                    <button className="nav-item" value='AboutMe'>About Me</button>
                    <button className="nav-item" value='DevInfo'>Dev Info</button>
                </div>
                <div className="footer-icons">
                    <a className="icons icon-1" href="https://github.com/DBAggie" target="_blank"><img
                        src={GitHubLogo} alt='Default Alt' /></a>
                    <br />
                    <a className="icons icon-2" href="https://www.linkedin.com/in/justin-h-7911536b/" target="_blank"><img
                        src={LinkedInLogo} alt='Default Alt' /></a>
                </div>
                <div className="footer-content">
                    <p>This app/site was built using React</p>
                </div>
            </div>
        </footer>
    );
}