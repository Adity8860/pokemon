// src/components/PokemonList.js
import React from 'react';
import PokemonCard from './PokemonCard';
import './PokemonList.css';

const PokemonList = ({ pokemon }) => {
  return (
    <div className="pokemon-list">
      {pokemon.map(p => (
        <PokemonCard key={p.id} pokemon={p} abilities={p.abilities} />
      ))}
    </div>
  );
};

export default PokemonList;
