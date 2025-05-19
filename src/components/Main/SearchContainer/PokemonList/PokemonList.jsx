import React, { useEffect, useState } from "react";
import axios from "axios";
import PokemonCard from "./PokemonCard";
import { v4 as uuidv4 } from "uuid";

const PokemonList = ({ pokemon }) => {
  const [pokemonDetails, setPokemonDetails] = useState({});



  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(pokemon.url);
        let result = response.data
        // result = {...result, ...userPokemon}
        setPokemonDetails(result);
      } catch (error) { 
        console.error("Error fetching data:", error);
      }
    };
    fetchData();
  }, []);

  
  return (
    <>
      <PokemonCard
        key={uuidv4()}
        pokemon={pokemon}
        pokemonDetails={pokemonDetails}
      />
    </>
  );
};

export default PokemonList;
