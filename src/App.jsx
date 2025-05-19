import { useState } from "react";
import { UserContext } from "./context/userContext";
import { BrowserRouter } from "react-router-dom";
import "normalize.css";
//import 'https://fonts.googleapis.com/css2?family=Poppins:wght@400;600;700&display=swap';
//import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  const [pokemon, setPokemon] = useState([]);
  const updatePokemon = (newPokemon) => {
    setPokemon([ ...pokemon, newPokemon]) 
  };
  return (
    <>
      <BrowserRouter>
        <Header />
        <UserContext.Provider value={{ pokemon, updatePokemon }}>
          <Main />
        </UserContext.Provider>
        
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
