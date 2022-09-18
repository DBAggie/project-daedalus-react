import './styles/Header-styles.css';
import './styles/styles.css';
import React, { useState, useEffect } from 'react';
// import { Header } from './Header.js';
import { Footer } from './Footer.js';
import { Home } from './Home.Sections.js';
import GitHubLogo from './resources/GitHub-Mark/PNG/GitHub-Mark-Light-32px.png';
import LinkedInLogo from './resources/LinkedIn-Logos/LI-In-Bug-32px.png';
import SiteLogo from './resources/ART-Logo-large.png';
import { AboutMe } from './AboutMe.Sections';
import { DevInfo } from './Dev.Sections';
import { Todo } from './Todo';
import IconLogo from './resources/favicon.ico?v=2';
import { SiteCards } from './Site-Cards.js';
import { AppCards } from './App-Cards.js';

function App() {
  const [content, setContent] = useState('Home');
  const [cardState, setCardState] = useState(true);

  useEffect(() => {
    setContent('Home');
  }, []);

  const handleClick = ({ target }) => {
    setContent(target.value);
    handleCards(target.value);
  }

  const handleCards = (currentContent) => {
    if (currentContent === 'Home') {
      setCardState(true);
    } else {
      setCardState(false);
    }
  }

  const handleContentChange = (appName) => {
    setContent(appName);
    if (appName !== 'Home') {
      setCardState(false);
    }

  }

  return (
    <div className="wrapper root">
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
            <button className="nav-item" value='Todo' onClick={handleClick}>Todo App</button>
          </div>
        </div>
      </header>


      {content == 'Home' ? <Home /> : null}
      {content == 'DevInfo' ? <DevInfo /> : null}
      {content == 'AboutMe' ? <AboutMe /> : null}
      {content == 'Todo' ? <Todo /> : null}

      <section className="app-sites-container">
        {cardState === true ? <AppCards onChange={handleContentChange} /> : null}
        {cardState === true ? <SiteCards /> : null}
      </section>
      <Footer />
    </div>
  );
}

export default App;
