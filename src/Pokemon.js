import React, { useState, useEffect } from 'react';
import { randomNumber } from './utility/Fetch.js';
import './styles/Pokemon.css';
import { PokemonData } from './components/Pokemon-Data.js';

export function Pokemon() {
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(true);

    const handleClick = () => {
        let random = randomNumber();
        setData(null);
        const apiURL = `https://pokeapi.co/api/v2/pokemon/${random}/`;
        fetch(apiURL)
            .then(response => response.json())
            .then(data => {
                setData(data);
            })
            .catch(error => {
                console.log(error);
                return;
            })
            .finally(() => {
                setLoading(false);
            });
    }

    return (
        <div className='pokemon-container'>
            <h1>Pokemon</h1>
            <button onClick={handleClick}>Get Pokemon</button>
            {loading || data === null ? <h1>Loading...</h1> : <PokemonData data={data} />}

        </div>
    );
}