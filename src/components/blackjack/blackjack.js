import React, { useState, useEffect } from 'react';
// import './blackjack.css';
import { CheckTotal, randomCard, checkCards } from '../utility/blackjack-utils.js';
import { BlackjackGame } from './blackjack-game.js';
import { BlackjackStartGame } from './blackjack-start-game.js';
import { PlayAgain } from './Blackjack-play-again.js';
import { PlayAgainControls } from './Blackjack-play-again-controls.js';
import { wait } from '@testing-library/user-event/dist/utils/index.js';
import '../../styles/blackjack.css';
import { GameControls } from './blackjack-game-controls.js';

export const Blackjack = () => {
    const [gameState, setGameState] = useState(false);
    //create a state variable called playerHand and set it to an empty array
    const [playerHand, setPlayerHand] = useState([]);
    //create a state variable called dealerHand and set it to an empty array
    const [dealerHand, setDealerHand] = useState([]);
    const [whoWon, setWhoWon] = useState('');
    const [playAgain, setPlayAgain] = useState(false);
    const [playerTotal, setPlayerTotal] = useState(null);
    const [dealerTotal, setDealerTotal] = useState(null);
    const [wasActive, setWasActive] = useState(false);

    function startGame() {
        setWasActive(true);
        setPlayAgain(false);
        setGameState(true);
        setPlayerTotal(0);
        setDealerTotal(0);
        setWhoWon('');
        setPlayerHand([]);
        setDealerHand([]);
        for (let i = 0; i < 2; i++) {
            setPlayerHand((prev) => [...prev, randomCard()]);
            setDealerHand((prev) => [...prev, randomCard()]);
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

    useEffect(() => {
        setPlayerTotal(CheckTotal(playerHand));
        setDealerTotal(CheckTotal(dealerHand));
        if (CheckTotal(playerHand) > 21) {
            gameLoop();
        }
        if (CheckTotal(playerHand === 21)) {
            gameLoop();
        }
    }, [playerHand]);

    useEffect(() => {
        setPlayerTotal(CheckTotal(playerHand));
        setDealerTotal(CheckTotal(dealerHand));
        if (CheckTotal(playerHand) > 21) {
            gameLoop();
        }
        if (CheckTotal(playerHand === 21)) {
            gameLoop();
        }
        if (CheckTotal(dealerHand) === 21) {
            gameLoop();
        }
    }, [dealerHand]);

    function hit() {
        var card = randomCard();
        setPlayerHand((prev) => [...prev, card]);
    }

    function stand() {
        //call the game loop function
        gameLoop();
    }

    return (
        <div className="blackjack-container">
            <div className="blackjack-game">
                {wasActive ? null : <BlackjackStartGame startGame={startGame} playerTotal={playerTotal} />}
                {gameState ? <BlackjackGame playerHand={playerHand} dealerHand={dealerHand} playerTotal={playerTotal} /> : null}
                {playAgain ? <PlayAgain startGame={startGame} whoWon={whoWon} playerTotal={playerTotal} dealerTotal={dealerTotal} /> : null}
                <div className="game-controls">
                    {gameState ? <GameControls hit={hit} stand={stand} /> : null}
                    {playAgain ? <PlayAgainControls startGame={startGame} /> : null}
                </div>
            </div>
        </div >
    )


}