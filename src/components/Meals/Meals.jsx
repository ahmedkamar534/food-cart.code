import React from "react";
import MealsItems from "../MealsItems/MealsItems";
import "./Meals.css";

export const DUMMY_MEALS = [
  {
    id: "1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "2",
    name: "Schnitzel",
    description: "A german specialty!",
    price: 16.5,
  },
  {
    id: "3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

export default function Meals() {
  return (
    <div className="meals">
      {DUMMY_MEALS.map((meal) => (
        <MealsItems key={meal.id} item={meal} />
      ))}
    </div>
  );
}
