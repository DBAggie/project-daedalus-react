import React from 'react';

export function PlayAgainControls(props) {

    const handleClick = (e) => {
        if (e.target.value === 'again') {
            props.startGame();
        }
        if (e.target.value === 'quit') {
            window.location.reload();
        }

    }
    return (
        <div className="game-controls">
            <button onClick={handleClick} value='again'>Play Again</button>
            <button onClick={handleClick} value='quit'>Quit</button>
        </div>
    );
}