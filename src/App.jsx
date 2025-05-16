import { useState } from "react";
import { UserContext } from "./context/userContext";
import { BrowserRouter } from "react-router-dom";
import "normalize.css";
import "./App.css";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Main />
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;
