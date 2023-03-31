import React, { useContext, useEffect, useState } from "react";
import CartContext from "../../Context/CartModalContext";
import ModalBody from "../ModalBody/ModalBody";
import "./CartModal.css";

export default function CartModal() {
  let { meals } = useContext(CartContext);
  const [totalAmount, setTotalAmount] = useState(0);
  const total = () => {
    let t = 0;
    meals.map((meal) => (t += meal.price * meal.amount));
    setTotalAmount(t.toFixed(2));
  };
  useEffect(() => {
    total();
  });

  return (
    <div className="cart-modal">
      <div
        className="modal fade"
        id="exampleModal"
        tabIndex="-1"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog">
          <div className="modal-content">
            {meals.map((meal) => (
              <ModalBody key={meal.id} meal={meal} />
            ))}

            <div className="modal-footer">
              <div className="one ">
                <p>Total Amount</p>
                <p>{totalAmount}</p>
              </div>
              <div className="two d-flex justify-content-end">
                <button
                  type="button"
                  className=" close"
                  data-bs-dismiss="modal">
                  Close
                </button>
                <button type="button" className="order">
                  Order
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
