import classes from "./AvailablePizza.module.css";
import Card from "../UI/Card";
import PizzaItem from "./PizzaItems/PizzaItem";

const DUMMY_PIZZA = [
  {
    id: "p1",
    name: "Margherita",
    description: " margherita, with a deliciously tangy single cheese topping.",
    price: 22.99,
  },
  {
    id: "p2",
    name: "Double Cheese Margherita",
    description: "he ever-popular Margherita - loaded with extra cheese",
    price: 16.5,
  },
  {
    id: "p3",
    name: "Farm House",
    description: "A pizza that goes ballistic on veggies!",
    price: 12.99,
  },
  {
    id: "p4",
    name: "Deluxe Veggie",
    description: "Green bell pepper; Mushrooms; Black olives; Grape tomatoes.",
    price: 18.99,
  },
];

const AvailablePizza = () => {
  const pizzaList = DUMMY_PIZZA.map((pizza) => (
    <PizzaItem
      id={pizza.id}
      key={pizza.id}
      name={pizza.name}
      description={pizza.description}
      price={pizza.price}
    />
  ));
  return (
    <section className={classes.pizza}>
      <Card>
        <ul>{pizzaList}</ul>
      </Card>
    </section>
  );
};
export default AvailablePizza;
