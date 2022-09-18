import React from 'react';
import './styles/home-styles.css';
import ReactCardLogo from './resources/current-sites/ruby-1.png';
import RubyCardLogo from './resources/current-sites/ruby-1.png';
import AngularCardLogo from './resources/current-sites/angular-1.png';
import LaravelCardLogo from './resources/current-sites/laravel-1.png';


export const SiteCards = () => {

    const cardInfo = {
        cards: [
            {
                title: 'React',
                altTitle: 'React Based Website',
                image: ReactCardLogo,
                description: 'This website was built on a React framework.',
                imgTitle: '#',
                listItems: [
                    'React',
                    'Javascript',
                    'HTML5',
                    'CSS'
                ]

            },
            {
                title: 'Angular',
                altTitle: 'Angular Based Website',
                image: AngularCardLogo,
                description: 'This website was built on an Angular framework.',
                imgTitle: '#',
                listItems: [
                    'Angular',
                    'Javascript',
                    'Typescript',
                    'HTML5',
                    'CSS'
                ]
            },
            {
                title: 'Ruby on Rails',
                altTitle: 'A Ruby Based Website',
                image: RubyCardLogo,
                description: 'This website was built on a Ruby framework.',
                imgTitle: '#',
                listItems: [
                    'Ruby',
                    'Javascript',
                    'HTML5',
                    'CSS'
                ]
            },
            {
                title: 'Laravel',
                altTitle: 'A Laravel Based Website',
                image: LaravelCardLogo,
                description: 'This website was built on a Laravel framework.',
                imgTitle: '#',
                listItems: [
                    'PHP',
                    'HTML5',
                    'CSS'
                ]
            }
        ]
    };

    return (
        <div className="current-sites">
            {cardInfo.cards.map(card => (
                <div className="card-site-4 card">
                    <div className="card-title">
                        <h3>{card.title}</h3>
                        <br />
                    </div>
                    <div className="card-img" id='laravel'><img src={card.image} /></div>
                    <div className="card-info">
                        <h4>{card.altTitle}</h4>
                        <br />
                        <p>{card.description}</p>
                        <br />
                        <h5>Languages & Libraries Used</h5>
                        <ul>
                            {card.listItems.map(item => (
                                <li>{item}</li>
                            ))}
                        </ul>
                        <br />
                        <a href={`./${card.imgTitle}.html`}>Check it out!</a>
                    </div>
                </div>
            ))}
        </div>
    );

}
