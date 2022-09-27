import React from 'react';
import { DealerHand } from './DealerHand.js';
import { PlayerHand } from './PlayerHand.js';

export function BlackjackGame(props) {
    const { playerHand, dealerHand, playerTotal } = props;
    return (
        <div className='game-content'>
            <div className="blackjack-dealer">
                <h2>Dealer</h2>
                <div className="blackjack-dealer-hand">
                    <DealerHand dealerHand={dealerHand} />
                </div>
            </div>
            <div className="blackjack-player">
                <h2>Player</h2>
                <div className="blackjack-player-hand">
                    <PlayerHand playerHand={playerHand} playerTotal={playerTotal} />
                </div>
            </div>

        </div>
    );
}


