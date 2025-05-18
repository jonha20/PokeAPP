import React, { useState, useEffect } from "react";
import { useDebounce } from "use-debounce";
import "./Search.css";

const Search = ({ setPokemon, pokemonList }) => {
  const [pokemonName, setPokemonName] = useState("");
  const [debouncedText] = useDebounce(pokemonName, 2000);

   useEffect(() => {
    const filtered = pokemonList.filter((poke) =>
      poke.name.toLowerCase().includes(debouncedText.toLowerCase())
    );
    setPokemon(filtered);
  }, [debouncedText, pokemonList, setPokemon]);

   const handleChange = (e) => {
    setPokemonName(e.target.value);
  };

  return (
    <>
     <div className="search-bar-container">
        <input
          type="text"
          name="name"
          value={pokemonName}
          onChange={handleChange}
          placeholder="Search Pokemon"
        />
      </div>
    </>
  );
};

export default Search;