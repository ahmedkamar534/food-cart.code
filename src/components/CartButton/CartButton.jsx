import React, { useContext } from "react";
import CartContext from "../../Context/CartModalContext";
import "./CartButton.css";

export default function Button() {
  let { meals } = useContext(CartContext);
  return (
    <button
      className="cart"
      data-bs-toggle="modal"
      data-bs-target="#exampleModal">
      <span className="mx-2">
        <i className="fa-solid fa-cart-shopping"></i>
      </span>
      <span className="mx-2">your cart</span>
      <span className="mx-2 three">{meals.length}</span>
    </button>
  );
}
