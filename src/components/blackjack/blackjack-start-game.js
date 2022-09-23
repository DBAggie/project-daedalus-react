import React from 'react';

export function BlackjackStartGame(props) {
    const { startGame } = props;

    const handleClick = () => {
        startGame();

    }

    return (
        <div>
            <button onClick={handleClick}>Start Game</button>
        </div>
    )
}