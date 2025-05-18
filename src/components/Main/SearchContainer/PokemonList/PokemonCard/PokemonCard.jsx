import React from "react";

const PokemonCard = ({pokemon , pokemonDetails}) => {
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

export default PokemonCard;
