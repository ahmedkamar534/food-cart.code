import React, { useContext, useState } from "react";
import CartContext from "../../Context/CartModalContext";
import "./MealsItems.css";

export default function MealsItems(props) {
  let count = 1;
  const [amount, setAmount] = useState(count);
  const [added, setAdded] = useState(false);
  let { AddMealHandler } = useContext(CartContext);
  let price = `$${props.item.price.toFixed(2)}`;

  const amountHandler = (e) => {
    setAmount(e.target.value);
  };

  const submitHandeler = (e) => {
    e.preventDefault();
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 1500);

    let newItem = {
      id: props.item.id,
      name: props.item.name,
      description: props.item.description,
      price: props.item.price,
      amount: amount,
    };

    AddMealHandler(newItem);
    setAmount(1);
  };

  return (
    <div className="mealsItems d-flex justify-content-between">
      <div className="content">
        <p className="type">{props.item.name}</p>
        <p className="desc">{props.item.description}</p>
        <p className="price">{price}</p>
      </div>

      <div className="action">
        <form onSubmit={submitHandeler}>
          <div>
            <label htmlFor="Amount">Amount</label>
            {added ? (
              <span className="added">added</span>
            ) : (
              <input
                type="number"
                id="Amount"
                min="1"
                max="10"
                value={amount}
                onChange={amountHandler}
              />
            )}
          </div>

          <button>+Add</button>
        </form>
      </div>
    </div>
  );
}
