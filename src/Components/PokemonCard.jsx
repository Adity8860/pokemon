// src/components/PokemonCard.js
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './PokemonCard.css';

const PokemonCard = ({ pokemon }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    if (pokemon && pokemon.name) {
      navigate(`/pokemon/${pokemon.name}`);
    } else {
      console.error('Pokemon data is missing or incomplete');
    }
  };

  return (
    <div className="pokemon-card" onClick={handleClick}>
      <img src={pokemon.sprites.front_default} alt={pokemon.name} />
      <h2>{pokemon.name}</h2>
      <p>Type: {pokemon.abilities[0].ability.name}</p>
    </div>
  );
};

export default PokemonCard;

