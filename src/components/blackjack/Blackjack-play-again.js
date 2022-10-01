import React from 'react';

export function PlayAgain(props) {
    const { whoWon, playerTotal, dealerTotal } = props;

    return (
        <div>
            <div className="Results">
                <h2>Results</h2>
                <div>
                    <p>The winner was {whoWon}</p>
                    <p>The dealer had {dealerTotal}</p>
                    <p>The player had {playerTotal}</p>
                </div>
            </div>

        </div>
    )
}