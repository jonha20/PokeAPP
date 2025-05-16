import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import SearchContainer from "./SearchContainer";
import PokemonForm from "./PokemonForm";
import PokemonDetais from "./SearchContainer/PokemonDetails";

const Main = () => {
  return (
    <main>
      <Routes>
        <Route path="/" element={<SearchContainer />} />
        <Route path="/new" element={<PokemonForm />} />
        <Route path="/pokemon/:id" element={<PokemonDetais />} />
      </Routes>
    </main>
  );
};

export default Main;
