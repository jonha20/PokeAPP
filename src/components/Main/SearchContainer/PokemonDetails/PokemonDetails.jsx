import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useLocation } from "react-router-dom";

const PokemonDetails = () => {
  const { id } = useParams();
  const location = useLocation();

  const [pokemonDetails, setPokemonDetails] = useState({});

  // Parseo manual de query params
  const searchParams = new URLSearchParams(location.search);
  const name = searchParams.get("name"); // Query param

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `https://pokeapi.co/api/v2/pokemon/${id}?name=${name}`
        );
        setPokemonDetails(response.data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [id, name]);
  return (
    <>
      <h1>{pokemonDetails.name}</h1>
      <img
        src={pokemonDetails.sprites?.front_default}
        alt={pokemonDetails.name}
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
    </>
  );
};

export default PokemonDetails;
