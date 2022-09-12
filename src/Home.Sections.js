import React from 'react';
import BackgroundEarth from './resources/earth_1.jpg';
import Meme from './resources/meme-1.png';
import Todo from './resources/current-apps/todo-1.png';
import ReactCardLogo from './resources/current-sites/ruby-1.png';
import RubyCardLogo from './resources/current-sites/ruby-1.png';
import AngularCardLogo from './resources/current-sites/angular-1.png';
import LaravelCardLogo from './resources/current-sites/laravel-1.png';

export const Home = () => {
    return (
        <div>
            <body className="mainSection">
                <div className="container-overlay">
                    <div className="overlay">
                        <img src={BackgroundEarth} />
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
                            <img src={Meme} />
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
            </body>
            <section className="app-sites-container">
                <div className="card-heading">
                    <h2>Current Applications</h2>
                </div>
                <div className="current-apps">
                    <div className="card-app-1 card">
                        <div className="card-background"></div>
                        <div className="card-title">
                            <h3>To Do List</h3>
                        </div>
                        <div className="card-img"><img src={Todo} /></div>
                        <div className="card-info">
                            <h4>A Dynamic To Do List App</h4>

                            <a href="./todo.html">Check it out!</a>
                        </div>
                    </div>
                    <div className="card-app-2 card">
                        <div className="card-title">
                            <h3>To Do List</h3>
                        </div>
                        <div className="card-img"><img src={Todo} /></div>
                        <div className="card-info">
                            <h4>A Dynamic To Do List App</h4>
                            <a href="./todo.html">Check it out!</a>
                        </div>
                    </div>
                    <div className="card-app-3 card">
                        <div className="card-title">
                            <h3>To Do List</h3>
                        </div>
                        <div className="card-img"><img src={Todo} /></div>
                        <div className="card-info">
                            <h4>A Dynamic To Do List App</h4>
                            <a href="./todo.html">Check it out!</a>
                        </div>
                    </div>
                    <div className="card-app-4 card">
                        <div className="card-title">
                            <h3>To Do List</h3>
                        </div>
                        <div className="card-img"><img src={Todo} /></div>
                        <div className="card-info">
                            <h4>A Dynamic To Do List App</h4>
                            <a href="./todo.html">Check it out!</a>
                        </div>
                    </div>
                </div>
                <div className="card-heading">
                    <h2>Current Sites</h2>
                </div>
                <div className="current-sites">

                    <div className="card-site-1 card">
                        <div className="card-title">
                            <h3>NextJS</h3>
                            <br />
                        </div>
                        <div className="card-img" id='react'><img src={ReactCardLogo} /></div>
                        <div className="card-info">
                            <h4>React Based Website</h4>
                            <br />
                            <p>This website was built on a React framework.</p>
                            <br />
                            <h5>Languages & Libraries Used</h5>
                            <br />
                            <li>
                                <ul>Javascript</ul>
                                <ul>React</ul>
                                <ul>HTML5</ul>
                                <ul>CSS</ul>
                            </li>
                            <br />
                            <a href="./todo.html">Check it out!</a>
                        </div>
                    </div>
                    <div className="card-site-2 card">
                        <div className="card-title">
                            <h3>Angular</h3>
                            <br />
                        </div>
                        <div className="card-img" id='angular'><img src={AngularCardLogo} /></div>
                        <div className="card-info">
                            <h4>Angular Based Website</h4>
                            <br />
                            <p>This website was built on an Angular framework.</p>
                            <br />
                            <h5>Languages & Libraries Used</h5>
                            <br />
                            <li>
                                <ul>Typescript</ul>
                                <ul>Angular</ul>
                                <ul>HTML5</ul>
                                <ul>CSS</ul>
                            </li>
                            <br />
                            <a href="./todo.html">Check it out!</a>
                        </div>
                    </div>
                    <div className="card-site-3 card">
                        <div className="card-title">
                            <h3>Ruby on Rails</h3>
                            <br />
                        </div>
                        <div className="card-img" id='ruby'><img src={RubyCardLogo} /></div>
                        <div className="card-info">
                            <h4>A Ruby Based Website</h4>
                            <br />
                            <p>This website was built on a Ruby framework.</p>
                            <br />
                            <h5>Languages & Libraries Used</h5>
                            <br />
                            <li>
                                <ul>Javascript</ul>
                                <ul>Ruby</ul>
                                <ul>HTML5</ul>
                                <ul>CSS</ul>
                            </li>
                            <br />
                            <a href="./todo.html">Check it out!</a>
                        </div>
                    </div>
                    <div className="card-site-4 card">
                        <div className="card-title">
                            <h3>Laravel</h3>
                            <br />
                        </div>
                        <div className="card-img" id='laravel'><img src={LaravelCardLogo} /></div>
                        <div className="card-info">
                            <h4>A Laravel Based Website</h4>
                            <br />
                            <p>This website was built on a Laravel framework.</p>
                            <br />
                            <h5>Languages & Libraries Used</h5>
                            <br />
                            <li>
                                <ul>PHP</ul>
                                <ul>HTML5</ul>
                                <ul>CSS</ul>
                            </li>
                            <br />
                            <a href="./todo.html">Check it out!</a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};