import React, { useEffect, useState } from "react";
import axios from "axios";
import ("./PokemonList.css");


const PokemonList = ({pokemon}) => {
  const [pokemonDetails, setPokemonDetails] = useState({});

useEffect(() => {
  const fetchData = async () => {
    try {
      const response = await axios.get(pokemon.url);
      setPokemonDetails(response.data);
    } catch (error) {
      console.error("Error fetching data:", error);
    }
  };
  fetchData();
}
, []);

  return <>
  <div className="pokemon-card">

  <img
    src={pokemonDetails.sprites?.front_default}
    alt={pokemon.name}
  />
  <p>Height: {pokemonDetails.height}</p>
  <p>Weight: {pokemonDetails.weight}</p>
  <p>Base Experience: {pokemonDetails.base_experience}</p>
  <p>
    Abilities:{" "}
    {pokemonDetails.abilities
      ?.map((ability) => ability.ability.name)
      .join(", ")}
  </p>
    <h2>{pokemon.name}</h2>
      </div>
  </>;
};

export default PokemonList;
