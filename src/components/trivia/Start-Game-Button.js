import { type } from '@testing-library/user-event/dist/type';
import React from 'react';

export function StartGameButton(props) {
    return (
        <div>
            <button onClick={props.startGame}>Start Game</button>
        </div>
    );
}