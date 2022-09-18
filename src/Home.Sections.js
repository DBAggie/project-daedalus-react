import React from 'react';
import BackgroundEarth from './resources/earth_1.jpg';
import Meme from './resources/meme-1.png';
import { SiteCards } from './Site-Cards.js';
import { AppCards } from './App-Cards.js';
import './styles/home-styles.css';

export const Home = () => {
    return (
        <div className='content'>
            <div className="mainSection">
                <div className="container-overlay">
                    <div className="overlay">
                        <img src={BackgroundEarth} alt='Default Alt' />
                    </div>
                    <div className="overlay">
                        <h1 className="overlay-title">Innovation in a connected world..innovating..and stuff</h1>
                    </div>
                </div>

                <div className="container mainbody">
                    <div className="main-1 main">
                        <p>Well...I have no idea. I wanted a project to work on and I though this
                            would be an interesting exercise and give me a chance to learn a lot of new things about web
                            development, app development, and back end systems. I have more about my work experience on my about
                            me page if you are interesting in reading. So what is my plan. To the left I have a current list of
                            items I have in the pipeline. I will have my complete source code on Github.
                            <br />
                            <br />
                            <img src={Meme} alt='Default Alt' />
                        </p>

                    </div>
                    <div className="main-2 main">
                        <p>The goal of this project is to give myself a challenge. Stage 1 will consist of creating two static
                            web pages
                            where I develop each one using a different language or framework. Stage 2 will be to develop
                            enhancements
                            for each static web page depending on the language or frameworks being utilized. I would like to
                            showcase
                            at least one or two unique features of the language or framework. Suggestions are always welcome.
                            Stage 3
                            will involve creating more typical applications using frameworks such as NextJS.
                            <br />
                            <br />
                            Each website will be
                            accessible to each other and a lot of the content will be copied and adjusted as necessary. This is
                            to
                            allow me to focus more on learning the environment rather than figuring out what I want the site to
                            look
                            like. I hate the front end development of websites. This is an attempt to gain a better
                            understanding of
                            front and back end but, I will do my best to focus on the front end aspect as I know I am weak in
                            that
                            department.
                            <br />
                            <br />
                            My code will all be available and suggestions on this project are welcome. Whether it is for changes
                            to
                            the existing code to make it more inline with common practices or feature enhancements. Wish me luck
                            and
                            enjoy trying to break my site. I am attempting to make everything dynamic so it should resize
                            content to
                            fit the device it is on. If you find an instance where this is not the case please open a ticket on
                            Github.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};