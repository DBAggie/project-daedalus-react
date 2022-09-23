import React from 'react';
import Todo from '../../resources/current-apps/todo-1.png';
import '../../styles/home-styles.css';


export const AppCards = (props) => {

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
                imgTitle: 'Blackjack'
            },
            {
                title: 'Random Pokemon App',
                image: Todo,
                description: 'An app that give you a random Pokemon',
                imgTitle: 'Pokemon'
            }
        ]
    };

    const handleClick = (event) => {
        const name = event.target.value;
        props.onChange(name);
    }

    return (
        <div>
            <div className="card-heading">
                <h2>Current Applications</h2>
            </div>

            <div className="current-apps">
                {cardInfo.cards.map(card => (
                    <div className="card" key={card.title}>
                        <div className="card-background"></div>
                        <div className="card-title">
                            <h3>{card.title}</h3>
                            <br />
                        </div>
                        <div className="card-img"><img src={card.image} alt='Default Alt' /></div>
                        <br />
                        <div className="card-info">
                            <h4>{card.description}</h4>
                            <button value={card.imgTitle} className='card-a' onClick={handleClick}>Check it out!</button>
                            {/* <a href='' value={card.imgTitle} className='card-a' onclick={handleClick}>Check it out!</a> */}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );

}
