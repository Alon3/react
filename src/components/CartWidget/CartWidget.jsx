import React from "react";

const CartWidget = ({ itemCount }) => {
  return (
    <div className="cart-widget">
      <img
        className="carrito"
        src={require("../assets/carrito.png")}
        alt="Carrito"
      />
      <span>({itemCount})</span>
    </div>
  );
};

export default CartWidget;
