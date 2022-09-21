import './styles/Header-styles.css';
import './styles/styles.css';
import React, { useState, useEffect } from 'react';
import { Header } from './Header.js';
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
import { Pokemon } from './Pokemon.js';

function App() {
  const [content, setContent] = useState('Home');
  const [cardState, setCardState] = useState(true);

  useEffect(() => {
    setContent('Home');
  }, []);

  const handleCardContentChange = (name) => {
    setContent(name);
    if (name !== 'Home') {
      setCardState(false);
    } else {
      setCardState(true);
    }
  }

  return (
    <div className="wrapper root">
      <Header onChange={handleCardContentChange} />

      {content == 'Home' ? <Home /> : null}
      {content == 'DevInfo' ? <DevInfo /> : null}
      {content == 'AboutMe' ? <AboutMe /> : null}
      {content == 'Todo' ? <Todo /> : null}
      {content == 'Pokemon' ? <Pokemon /> : null}

      <section className="app-sites-container">
        {cardState === true ? <AppCards onChange={handleCardContentChange} /> : null}
        {cardState === true ? <SiteCards /> : null}
      </section>
      <Footer />
    </div>
  );
}

export default App;
