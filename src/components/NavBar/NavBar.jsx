import React from "react";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
  return (
    <nav className="navbar">
      <img className="logoimg" src={require("../assets/logo.gif")} alt="Logo" />
      <div className="logo">Pizzería FAX</div>
      <div className="categories">
        <a href="#">Pizzas</a>
        <a href="#">Empanadas</a>
        <a href="#">Gaseosas</a>
      </div>
      <CartWidget itemCount={5} />
    </nav>
  );
};

export default NavBar;
