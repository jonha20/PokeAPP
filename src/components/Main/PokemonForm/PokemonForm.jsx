import React, { useState ,useContext} from "react";
import { useForm } from "react-hook-form";
import { UserContext } from "../../../context/userContext";
import "./PokemonForm.css";

const pokemonTypes = [
  "normal", "fire", "water", "grass", "electric", "ice", "fighting", "poison",
  "ground", "flying", "psychic", "bug", "rock", "ghost", "dark", "dragon",
  "steel", "fairy"
];

const PokemonForm = () => {
  const { register, handleSubmit, reset } = useForm();
  const { updatePokemon } = useContext(UserContext);
  const [values, setValues] = useState({
    name: "",
    typeOne: "",
    typeTwo: "",
    image: ""
  });
  const onSubmit = (data) => {
    updatePokemon({
       name: data.name.toLowerCase(),
      typeOne: data.typeOne,
      typeTwo: data.typeTwo,
      image: data.image
    });
    reset();
  };

  // const handleChange = (e) => {
  //   setValues({
  //     ...values,
  //     [e.target.name]: e.target.value,
  //   });
  // };

  // const handleSubmit = (e) => {
  //   e.preventDefault();
  //   setValues({
  //     name: "",
  //     type: "",
  //     ability: "",
  //     img: "",
  //   });

  

  return (
    <>
    <div className="pokemon-form-container">
       <form onSubmit={handleSubmit(onSubmit)}>
        <input type="text" name="name" placeholder="Enter Pokemon Name" minLength="3" required {...register("name")}/>
     <select name="typeOne" required {...register("typeOne")}>
          <option value="">Select Type One</option>
          {pokemonTypes.map((type) => (
            <option key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>
          ))}
        </select>
        <select name="typeTwo" {...register("typeTwo")}>
          <option value="">Select Type Two (optional)</option>
          {pokemonTypes.map((type) => (
            <option key={type} value={type}>{type.charAt(0).toUpperCase() + type.slice(1)}</option>
          ))}
        </select>
        <input type="text" name="img" placeholder="Enter Pokemon Image URL" required {...register("image")}/>
        <button type="submit">Submit</button>
      </form>
      </div>
    </>
  );
};

export default PokemonForm;
