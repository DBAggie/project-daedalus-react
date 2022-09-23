import React from 'react';

export function DealerHand(props) {
    const { dealerHand } = props;

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
        </div>
    );
}