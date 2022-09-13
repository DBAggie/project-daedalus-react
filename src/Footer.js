import React from 'react';
import GitHubLogo from './resources/GitHub-Mark/PNG/GitHub-Mark-Light-32px.png';
import LinkedInLogo from './resources/LinkedIn-Logos/LI-In-Bug-32px.png';
import './styles/Footer-styles.css';

export const Footer = () => {
    return (
        <footer>
            <div className="footer-container">
                <li>
                    <ul className="nav-link" href="#">Home</ul>
                    <ul className="nav-link" href="about.html">About Me</ul>
                    <ul className="nav-link" href="#">Contact</ul>
                </li>
                <div className="footer-icons">
                    <a className="icons icon-1" href="https://github.com/DBAggie" target="_blank"><img
                        src={GitHubLogo} /></a>
                    <br />
                    <a className="icons icon-2" href="https://www.linkedin.com/in/justin-h-7911536b/" target="_blank"><img
                        src={LinkedInLogo} /></a>
                </div>
                <p>This app/site was built using React</p>
            </div>
        </footer>
    );
}