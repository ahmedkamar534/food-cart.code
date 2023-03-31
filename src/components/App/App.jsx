import React from "react";
import { CartContextProvider } from "../../Context/CartModalContext";
import CartModal from "../CartModal/CartModal";
import Heading from "../Heading/Heading";
import Meals from "../Meals/Meals";

export default function App() {
  return (
    <CartContextProvider>
      <CartModal />
      <Heading />
      <Meals />
    </CartContextProvider>
  );
}
