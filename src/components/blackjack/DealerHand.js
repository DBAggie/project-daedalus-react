import React from 'react';

export function DealerHand(props) {
    const { dealerHand } = props;

    return (
        <div>
            <p>The dealer is showing a: </p>
            <div>
                <p>{dealerHand[0].value}-{dealerHand[0].suit}</p>
            </div>
        </div>
    );
}