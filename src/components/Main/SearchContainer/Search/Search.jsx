import React, { useState, useEffect ,useContext} from "react";
import { useDebounce } from "use-debounce";
import { UserContext } from "../../../../context/userContext";

const Search = ({ setPokemon, pokemonList }) => { 
  const { pokemon } = useContext(UserContext);
  const [pokemonName, setPokemonName] = useState("");
  const [debouncedText] = useDebounce(pokemonName, 2000);
 

   useEffect(() => {
  // Combina los Pokémon de la API y los del usuario
  const allPokemon = [
    ...pokemonList,
    ...(pokemon || [])
  ];
  console.log(allPokemon);
  console.log(debouncedText);
  console.log(pokemonList);
  const filtered = allPokemon.filter((poke) =>
    poke.name.toLowerCase().includes(debouncedText.toLowerCase())
  );
  setPokemon(filtered);
}, [debouncedText, pokemonList, pokemon, setPokemon]);

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