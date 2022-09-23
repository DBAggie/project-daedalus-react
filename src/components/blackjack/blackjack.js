import React, { useState, useEffect } from 'react';
// import './blackjack.css';
import { CreateDeck, ShuffleDeck, CheckBust, CheckTotal, ranIndex } from '../utility/blackjack-utils.js';
import { BlackjackGame } from './blackjack-game.js';
import { BlackjackStartGame } from './blackjack-start-game.js';

export const Blackjack = () => {
    const [gameState, setGameState] = useState(false);
    //create a state variable called deck and set it to an empty array
    const [deck, setDeck] = useState([]);
    //create a state variable called playerHand and set it to an empty array
    const [playerHand, setPlayerHand] = useState([]);
    //create a state variable called dealerHand and set it to an empty array
    const [dealerHand, setDealerHand] = useState([]);
    const [whoWon, setWhoWon] = useState('');

    function startGame() {
        setGameState(true);
        //create a new deck
        setDeck(CreateDeck());
        //set the deck state to the shuffled deck
        //create a new player hand
        const newPlayerHand = [];
        //add two cards to the player hand
        newPlayerHand.push(deck[ranIndex(deck)]);
        newPlayerHand.push(deck[ranIndex(deck)]);
        //set the player hand state to the new player hand
        setPlayerHand(newPlayerHand);
        //create a new dealer hand
        const newDealerHand = [];
        //add two cards to the dealer hand
        newDealerHand.push(deck[ranIndex(deck)]);
        newDealerHand.push(deck[ranIndex(deck)]);
        //set the dealer hand state to the new dealer hand
        setDealerHand(newDealerHand);

    }

    function gameLoop() {
        //Create a loop that handles the dealer's turn
        //while the dealer's hand is less than 17
        while (CheckTotal(dealerHand) < 17) {
            //add a card to the dealer's hand
            dealerHand.push(deck.pop());
            //set the dealer hand state to the new dealer hand
            setDealerHand(dealerHand);
        }
        const playerTotal = CheckTotal(playerHand);
        const dealerTotal = CheckTotal(dealerHand);
        console.log(playerTotal, dealerTotal);
        //check if the player has busted
        if (CheckBust(playerHand)) {
            setWhoWon('dealer');
            setGameState(false);
        }
        //check if the dealer has busted
        if (CheckBust(dealerHand)) {
            setWhoWon('player');
            setGameState(false);
        }
        //check if the player has blackjack
        if (playerTotal === 21) {
            setWhoWon('player');
            setGameState(false);
        }
        //check if the dealer has blackjack
        if (dealerTotal === 21) {
            setWhoWon('dealer');
            setGameState(false);
        }
        //check if the player has won
        if (playerTotal > dealerTotal) {
            setWhoWon('player');
            setGameState(false);
        }
        //check if the dealer has won
        if (dealerTotal > playerTotal) {
            setWhoWon('dealer');
            setGameState(false);
        }
        //check if the game is a draw
        if (playerTotal === dealerTotal) {
            setWhoWon('draw');
            setGameState(false);
        }

    }

    function hit() {
        //add a card to the player's hand
        let newCard = deck[ranIndex(deck)];
        console.log(newCard);
        setPlayerHand((prev) => [...prev, newCard]);
        console.log(playerHand);
        console.log(CheckTotal(playerHand));

        if (CheckTotal(playerHand) > 21) {
            gameLoop();
        }
    }

    function stand() {
        //call the game loop function
        gameLoop();
    }

    return (
        <div className="blackjack-container">

            {gameState ? null : <BlackjackStartGame startGame={startGame} />}
            {gameState ? <BlackjackGame playerHand={playerHand} dealerHand={dealerHand} /> : null}

            <button onClick={hit}>Hit</button>
            <button onClick={stand}>Stand</button>

        </div>
    )


}