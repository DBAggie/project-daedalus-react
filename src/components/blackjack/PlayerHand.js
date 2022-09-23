import React from 'react';

export function PlayerHand(props) {

    // console.log(playerHand);

    return (
        <div>
            <p>The Player is holding: </p>
            {props.playerHand.map((card, index) => {
                return (
                    <div key={index}>
                        <p>{`${card.value}-${card.suit}`}</p>
                    </div>
                );
            })}
        </div>
    );
}