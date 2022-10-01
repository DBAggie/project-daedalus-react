import React from 'react';
import GitHubLogo from '../../resources/GitHub-Mark/PNG/GitHub-Mark-Light-32px.png';
import LinkedInLogo from '../../resources/LinkedIn-Logos/LI-In-Bug-32px.png';
import SiteLogo from '../../resources/ART-Logo-large.png';

export const Header = (props) => {
    const { onChange, toggleApps } = props;


    const handleClick = (event) => {
        if (event.target.value === 'apps') {
            toggleApps();
        } else {
            const name = event.target.value;
            onChange(name);
        }

    }

    return (
        <header>
            <div className="header-container">
                <div className="header-icons">
                    <a className="icons icon-1" href="https://github.com/DBAggie" target="_blank"><img
                        src={GitHubLogo} alt='Default Alt' /></a>
                    <a className="icons icon-2" href="https://www.linkedin.com/in/justin-h-7911536b/" target="_blank"><img
                        src={LinkedInLogo} alt='Default Alt' /></a>
                </div>
                <div className="header-logo">
                    <img src={SiteLogo} />
                </div>
                <div className="header-nav">
                    <button className="nav-item" value='Home' onClick={handleClick}>Home</button>
                    <button className="nav-item" value='AboutMe' onClick={handleClick}>About Me</button>
                    <button className="nav-item" value='DevInfo' onClick={handleClick}>Dev Info</button>
                    <button className="nav-item" value='apps' onClick={handleClick}>Show Apps</button>
                </div>
            </div>
        </header>
    );
}