
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import PokemonList from './Components/PokemonList.jsx';
import PokemonDetails from './Components/PokemonDetails.jsx';
import './App.css';

const App = () => {
  const [pokemon, setPokemon] = useState([]);
  const [search, setSearch] = useState('');

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=151');
        const fetches = response.data.results.map(p => axios.get(p.url));
        const results = await Promise.all(fetches);
        setPokemon(results.map(r => r.data));
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  const handleSearch = (event) => {
    setSearch(event.target.value);
  };

  const filteredPokemon = pokemon.filter(p =>
    p.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <Router>
      <div className="App">
        <h1>Pokémon List</h1>
        <input
          type="text"
          placeholder="Search Pokémon"
          value={search}
          onChange={handleSearch}
        />
        <Routes>
          <Route exact path="/" element={<PokemonList pokemon={filteredPokemon} />} />
          <Route path="/pokemon/:name" element={<PokemonDetails/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
