import React, { useContext } from "react";
import CartContext from "../../Context/CartModalContext";

import "./ModalBody.css";

export default function ModalBody(props) {
  let { remove } = useContext(CartContext);
  let { name, amount, price, id } = props.meal;

  let totalAmount = (price * amount).toFixed(2);

  return (
    <div className="modal-body d-flex justify-content-between align-items-center container ">
      <div className="one">
        <p>{name}</p>
        <span className="a">${price}</span>
        <span className="b">x{amount}</span>
        <span className="b">${totalAmount}</span>
      </div>
      <div className="btss">
        <button onClick={() => remove(id)}>Remove</button>
      </div>
    </div>
  );
}
