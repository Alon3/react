import React from "react";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <ItemListContainer greetings="¡Bienvenido a nuestra tienda en línea!" />
    </div>
  );
};

export default App;
