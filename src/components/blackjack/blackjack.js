import React, { useState, useEffect } from 'react';
// import './blackjack.css';
import { CreateDeck, ShuffleDeck, CheckBust, CheckTotal, ranIndex, randomCard } from '../utility/blackjack-utils.js';
import { BlackjackGame } from './blackjack-game.js';
import { BlackjackStartGame } from './blackjack-start-game.js';
import { PlayAgain } from './Blackjack-play-again.js';

export const Blackjack = () => {
    const [gameState, setGameState] = useState(false);
    //create a state variable called playerHand and set it to an empty array
    const [playerHand, setPlayerHand] = useState([]);
    //create a state variable called dealerHand and set it to an empty array
    const [dealerHand, setDealerHand] = useState([]);
    const [whoWon, setWhoWon] = useState('');
    const [playAgain, setPlayAgain] = useState(false);
    const [playerTotal, setPlayerTotal] = useState(0);
    const [dealerTotal, setDealerTotal] = useState(0);

    function startGame() {
        setPlayAgain(false);
        setGameState(true);
        setPlayerTotal(0);
        setDealerTotal(0);
        setWhoWon('');
        setPlayerHand([]);
        setDealerHand([]);
        const playerHand = [];
        playerHand.push(randomCard());
        playerHand.push(randomCard());
        setPlayerHand(playerHand);
        //deal two cards to the dealer
        const dealerHand = [];
        dealerHand.push(randomCard());
        dealerHand.push(randomCard());
        setDealerHand(dealerHand);

        if (CheckTotal(dealerHand) === 21) {
            setWhoWon('dealer');
            setGameState(false);
            setPlayAgain(true);
        }
    }

    function gameLoop() {
        const aplayerTotal = CheckTotal(playerHand);
        setPlayerTotal(aplayerTotal);


        //Create a loop that handles the dealer's turn
        //while the dealer's hand is less than 17
        if (aplayerTotal < 21) {
            while (CheckTotal(dealerHand) < 17) {
                //add a card to the dealer's hand
                dealerHand.push(randomCard());
                //set the dealer hand state to the new dealer hand
                setDealerHand(dealerHand);
            }
        }
        const adealerTotal = CheckTotal(dealerHand);
        setDealerTotal(adealerTotal);

        //check if the player has busted
        if (aplayerTotal > 21) {
            setWhoWon('dealer');
            setGameState(false);
            setPlayAgain(true);
            return;
        }
        //check if the dealer has busted
        if (adealerTotal > 21) {
            setWhoWon('player');
            setGameState(false);
            setPlayAgain(true);
            return;
        }
        //check if the player has blackjack
        if (aplayerTotal === 21) {
            setWhoWon('player');
            setGameState(false);
            setPlayAgain(true);
            return;
        }
        //check if the dealer has blackjack
        if (adealerTotal === 21) {
            setWhoWon('dealer');
            setGameState(false);
            setPlayAgain(true);
            return;
        }
        //check if the player has won
        if (aplayerTotal > adealerTotal) {
            setWhoWon('player');
            setGameState(false);
            setPlayAgain(true);
            return;
        }
        //check if the dealer has won
        if (adealerTotal > aplayerTotal) {
            setWhoWon('dealer');
            setGameState(false);
            setPlayAgain(true);
            return;
        }
        //check if the game is a draw
        if (aplayerTotal === adealerTotal) {
            setWhoWon('draw');
            setGameState(false);
            setPlayAgain(true);
            return;
        }

    }

    function hit() {
        var card = randomCard();
        console.log(card);
        setPlayerHand((prev) => [...prev, card]);
        console.log(CheckTotal(playerHand));
        console.info(playerHand);
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

            {gameState && playAgain ? null : <BlackjackStartGame startGame={startGame} />}
            {gameState ? <BlackjackGame playerHand={playerHand} dealerHand={dealerHand} /> : null}
            {playAgain ? <PlayAgain startGame={startGame} whoWon={whoWon} playerTotal={playerTotal} dealerTotal={dealerTotal} /> : null}

            <button onClick={hit}>Hit</button>
            <button onClick={stand}>Stand</button>

        </div>
    )


}