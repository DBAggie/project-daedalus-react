import React from 'react';
import Todo from './resources/current-apps/todo-1.png';
import './styles/home-styles.css';


export const AppCards = () => {

    const cardInfo = {
        cards: [
            {
                title: 'A dynamic To Do List App',
                image: Todo,
                description: 'A Dynamic To Do List App',
                imgTitle: 'Todo'

            },
            {
                title: 'A Weather App',
                image: Todo,
                description: 'An application to give you information about the weather',
                imgTitle: 'Todo'
            },
            {
                title: 'A Blackjack Game',
                image: Todo,
                description: 'An application so you can play Blackjack',
                imgTitle: 'Todo'
            },
            {
                title: 'Random Pokemon App',
                image: Todo,
                description: 'An app that give you a random Pokemon',
                imgTitle: 'Todo'
            }
        ]
    };

    return (
        <div className="current-apps">
            {cardInfo.cards.map(card => (
                <div className="card">
                    <div className="card-background"></div>
                    <div className="card-title">
                        <h3>{card.title}</h3>
                    </div>
                    <div className="card-img"><img src={card.image} /></div>
                    <div className="card-info">
                        <h4>A Dynamic To Do List App</h4>
                        <a href={`./${card.imgTitle}.html`} className='card-a'>Check it out!</a>
                    </div>
                </div>
            ))}
        </div>
    );

}
