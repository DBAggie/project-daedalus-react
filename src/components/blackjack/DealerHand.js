import React from 'react';

export function DealerHand(props) {
    const { dealerHand, playerTotal } = props;

    return (
        <div>
            <p>The dealer is holding: </p>
            {dealerHand.map((card, index) => {
                return (
                    <div key={index}>
                        <p>{`${card.value}-${card.suit}`}</p>
                    </div>
                );
            })}
            <p>{`Dealer Total is: ${playerTotal}`}</p>
        </div>
    );
}