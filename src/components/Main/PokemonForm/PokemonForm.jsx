import React, { useState } from "react";

const PokemonForm = () => {
  const [values, setValues] = useState({
    name: "",
    type: "",
    ability: "",
    img: "",
  });


  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setValues({
      name: "",
      type: "",
      ability: "",
      img: "",
    });

  };

  return (
    <>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={values.name} placeholder="Enter Pokemon Name" onChange={handleChange}/>
        <input type="text" name="type" value={values.type} placeholder="Enter Pokemon Type" onChange={handleChange}/>
        <input type="text" name="ability" value={values.ability} placeholder="Enter Pokemon Ability" onChange={handleChange}/>
        <input type="text" name="img" value={values.img} placeholder="Enter Pokemon Image URL" onChange={handleChange}/>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default PokemonForm;
