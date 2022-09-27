import React from 'react';

export function GameControls(props) {
    const { hit, stand } = props;

    const handleClick = (e) => {
        if (e.target.value === 'hit') {
            hit();
        } else if (e.target.value === 'stand') {
            stand();
        }
    };

    return (
        <div className='game-controls'>
            <button onClick={handleClick} value='hit'>Hit</button>
            <button onClick={handleClick} value='stand'>Stand</button>
        </div>
    )
}