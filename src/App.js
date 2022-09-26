import './styles/Header-styles.css';
import './styles/styles.css';
import React, { useState, useEffect } from 'react';
import { Header } from './components/header-footer/Header.js';
import { Footer } from './components/header-footer/Footer.js';
import { Home } from './components/home-section/Home.Sections.js';
import { AboutMe } from './components/aboutme-section/AboutMe.Sections';
import { DevInfo } from './components/dev-section/Dev.Sections';
import { Todo } from './components/todo-app/Todo';
import IconLogo from './resources/favicon.ico?v=2';
import { SiteCards } from './components/site-cards/Site-Cards.js';
import { AppCards } from './components/app-cards/App-Cards.js';
import { Pokemon } from './components/pokemon-app/Pokemon.js';
import { Blackjack } from './components/blackjack/blackjack.js';
import { Trivia } from './components/trivia/Trivia.js';

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
      {content == 'Blackjack' ? <Blackjack /> : null}
      {content === 'Trivia' ? <Trivia /> : null}


      <section className="app-sites-container">
        {cardState === true ? <AppCards onChange={handleCardContentChange} /> : null}
        {cardState === true ? <SiteCards /> : null}
      </section>
      <Footer />
    </div>
  );
}

export default App;
