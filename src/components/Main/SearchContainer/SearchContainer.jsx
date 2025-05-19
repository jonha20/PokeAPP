import React, { useState, useEffect } from "react";
import axios from "axios";
import PokemonList from "./PokemonList";
import Search from "./Search";
import { v4 as uuidv4 } from "uuid";

const SearchContainer = () => {
  const [allPokemon, setAllPokemon] = useState([]);
  const [pokemon, setPokemon] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon?limit=500&offset=0`
        );
        setAllPokemon(response.data.results);
        setPokemon(response.data.results);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
      <Search setPokemon={setPokemon} pokemonList={allPokemon} />
      <article className="pokemon-list-container">
        {pokemon.length > 0 ? (
          pokemon.map((poke) => (
            <PokemonList key={uuidv4()} pokemon={poke} />
          ))
        ) : (
          <h1>Loading...</h1>
        ) || pokemon.length === 0 ? (
          <h1>No Pokemon Found</h1>
        ): null}
      </article>
    </>
  );
};

export default SearchContainer;