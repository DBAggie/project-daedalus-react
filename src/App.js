import './styles/home-styles.css';
import './styles/styles.css';
import React, { useState } from 'react';
// import { Header } from './Header.js';
import { Footer } from './Footer.js';
import { Home } from './Home.Sections.js';
import GitHubLogo from './resources/GitHub-Mark/PNG/GitHub-Mark-Light-32px.png';
import LinkedInLogo from './resources/LinkedIn-Logos/LI-In-Bug-32px.png';
import SiteLogo from './resources/ART-Logo-large.png';
import { AboutMe } from './AboutMe.Sections';
import { DevInfo } from './Dev.Sections';

const componentObj = {
  AboutMe: AboutMe,
  DevInfo: DevInfo,
  Home: Home
}

function App(props) {
  const [content, setContent] = useState('Home');

  const handleClick = (prev) => {
    console.log(content);
    console.log(prev);
    setContent(prev);
  }
  return (
    <div className="wrapper">
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
              <ul><a className="nav-link active-page" value='Home' onClick={handleClick}>Home</a></ul>
              <ul><a className="nav-link" value='AboutMe' onClick={handleClick}>About Me</a></ul>
              <ul><a className="nav-link" value='DevInfo' onClick={handleClick}>Dev Info</a></ul>
            </li>
          </nav>
        </div>
      </header>
      {content == 'Home' && <Home />}
      {content == 'DevInfo' && <DevInfo />}
      {content == 'AboutMe' && <AboutMe />}
      <Footer />
    </div>
  );
}

export default App;
