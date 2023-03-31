import React, { useContext } from "react";
import CartButton from "../CartButton/CartButton";
import "./Heading.css";
import logo from "../../assets/meals.webp";
import CartContext from "../../Context/CartModalContext";

export default function Heading() {
  let { warning } = useContext(CartContext);
  return (
    <div className="heading">
      <header>
        <div className="container content ">
          <h3>React Meals</h3>
          <CartButton />
        </div>
      </header>
      <img src={logo} alt="food img" className="w-100" />
      <div className="text">
        <h2>Delicious Food Deliverd To You</h2>
        <p>
          choose your favorite meal from my broad selection of available meals
          and enjoy your delicious lunch or dinner at home
        </p>
        <p>
          all our meal are cooked with high quality ingredient, just-in-time and
          of corse by a perfect chefs
        </p>
      </div>
      {warning && (
        <div className="warnn container">Item is already execting</div>
      )}
    </div>
  );
}
