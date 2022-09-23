import React from 'react';

export function PlayAgain(props) {
    const { startGame, whoWon, playerTotal, dealerTotal } = props;

    const handleClick = (e) => {
        if (e.target.value === 'again') {
            startGame();
        }
        if (e.target.value === 'quit') {
            window.location.reload();
        }
    }

    return (
        <div>
            <div className="Results">
                <h2>Results</h2>
                <div className="Results">
                    <p>The winner was {whoWon}</p>
                    <p>The dealer had {dealerTotal}</p>
                    <p>The play had {playerTotal}</p>
                </div>
            </div>
            <button onClick={handleClick} value='again'>Play Again</button>
            <button onClick={handleClick} value='quit'>Quit</button>
        </div>
    )
}