import React, { useState } from 'react';

export function PokemonData(props) {
    const { data } = props;

    return (
        <div className='pokemon'>
            <h2>{data.name}</h2>
            <img src={data.sprites.front_default} className='pokemon-img' />
            <div className='pokemon-data'>
                <ul>
                    <li>Weight: {data.weight}</li>
                    <li>Base Stat: {data.stats[0].base_stat}</li>
                    <li>Effort: {data.stats[0].effort}</li>
                    <li>Type: {data.types[0].type.name}</li>
                </ul>
            </div>

        </div>
    );
}