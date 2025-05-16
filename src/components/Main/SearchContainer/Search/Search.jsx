import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Search.css";

const Search = ({ setPokemon, pokemonList }) => {
  const [pokemonName, setPokemonName] = useState({ name: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setPokemonName({
      ...pokemonName,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const filtered = pokemonList.filter((poke) =>
      poke.name.toLowerCase().includes(pokemonName.name.toLowerCase())
    );
    setPokemon(filtered);
    setPokemonName({ name: "" });
    //navigate("/detais");
  };

  return (
    <>
     <div className="search-bar-container">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          value={pokemonName.name}
          onChange={handleChange}
          placeholder="Search Pokemon"
        />
        <button type="submit">Search</button>
      </form>
      </div>
    </>
  );
};

export default Search;