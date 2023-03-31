import { createContext, useState } from "react";

const CartContext = createContext([]);

//

export const CartContextProvider = (props) => {
  const [meals, setMeals] = useState([]);
  const [warning, setWarning] = useState(false);

  //
  const AddMealHandler = (meal) => {
    let ids = false;
    meals.forEach((pro) => {
      if (pro.id === meal.id) {
        ids = true;
      }
    });
    if (ids) {
      setWarning(true);
      setTimeout(() => {
        setWarning(false);
      }, 1500);
      return;
    }
    setMeals((prev) => {
      return [...prev, { ...meal }];
    });
  };
  //
  const remove = (id) => {
    let newArr = meals.filter((meal) => {
      return meal.id !== id;
    });
    setMeals(newArr);
  };
  //
  // const changeHandeler = (item, d) => {
  //   let ind = 0;
  //   meals.forEach((meal, index) => {
  //     if (meal.id === item.id) {
  //       ind = index;
  //     }
  //     let newMeals = meals;
  //     if (newMeals[ind].amount === 0) {
  //       newMeals[ind].amount = 1;
  //     }
  //     console.log(newMeals[ind].amount);
  //     newMeals[ind].amount += d;
  //     setMeals([...newMeals]);
  //   });
  // };

  return (
    <CartContext.Provider
      value={{
        meals,
        AddMealHandler,
        warning,
        remove,
      }}>
      {props.children}
    </CartContext.Provider>
  );
};
export default CartContext;
