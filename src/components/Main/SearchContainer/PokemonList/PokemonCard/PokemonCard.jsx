import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const PokemonCard = ({ pokemon, pokemonDetails }) => {
  const [imgSrc, setImgSrc] = useState(
    pokemonDetails.sprites?.front_default || pokemon.image
  );

   const navigate = useNavigate(); 

  const pokemonInfo = () => {
    navigate(`/pokemon/${pokemon.name}`); 
  };

  return (
    <>
      <div className="pokemon-card">
        <img
          src={imgSrc}
          alt={pokemon.name}
          onError={() => setImgSrc(pokemon.image)}
        />

        {pokemon.typeOne !== undefined ? (
          <>
            <p>TypeOne: {pokemon.typeOne}</p>
            <p>TypeTwo: {pokemon.typeTwo}</p>
          </>
        ) : (
          <>
            <p>Height: {pokemonDetails.height}</p>
            <p>Weight: {pokemonDetails.weight}</p>
            <p>Base Experience: {pokemonDetails.base_experience}</p>
            <p>
              Abilities:{" "}
              {pokemonDetails.abilities
                ?.map((ability) => ability.ability.name)
                .join(", ")}
            </p>
            <button onClick={pokemonInfo}>More Info</button>
          </>
        )}

        <h2>{pokemon.name}</h2>
      </div>
    </>
  );
};

export default PokemonCard;
