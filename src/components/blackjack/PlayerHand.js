import React from 'react';

export function PlayerHand(props) {
    const { playerHand } = props;

    return (
        <div>
            <p>The Player is holding: </p>
            {playerHand.map((card, index) => {
                return (
                    <div key={index}>
                        <p>{`${card.value}-${card.suit}`}</p>
                    </div>
                );
            })}
        </div>
    );
}