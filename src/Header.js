import React from 'react';
import GitHubLogo from './resources/GitHub-Mark/PNG/GitHub-Mark-Light-32px.png';
import LinkedInLogo from './resources/LinkedIn-Logos/LI-In-Bug-32px.png';
import SiteLogo from './resources/ART-Logo-large.png';

export const Header = () => {
    return (
        <div>
            <div className="header-background">
                <p>-</p>
            </div>
            <header>
                <div className="container header">
                    <div className="footer-icons">
                        <a className="icons icon-1" href="https://github.com/DBAggie" target="_blank"><img
                            src={GitHubLogo} /></a>
                        <br />
                        <a className="icons icon-2" href="https://www.linkedin.com/in/justin-h-7911536b/" target="_blank"><img
                            src={LinkedInLogo} /></a>
                    </div>
                    <img src={SiteLogo} />
                    <nav className="mainnav header-content">
                        <li>
                            <ul><a className="nav-link active-page" href="#">Home</a></ul>
                            <ul><a className="nav-link" href="about.html">About Me</a></ul>
                            <ul><a className="nav-link" href="dev.html">Dev Info</a></ul>
                        </li>
                    </nav>
                </div>
            </header>
        </div>
    );
}