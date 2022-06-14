import { useContext } from "react";
import classes from "./PizzaItem.module.css";
import PizzaItemForm from "./PizzaItemForm";
import cartContext from "../../../Store/Cart-context";

const PizzaItem = (props) => {
  const cartCtx = useContext(cartContext);
  const price = `$${props.price.toFixed(2)}`;

  const addToCartHandler = (amount) => {
    cartCtx.addItem({
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    });
  };

  //const addToCartHandler = (amount) => {};

  return (
    <li className={classes.pizza}>
      <div>
        <h3 className={classes.name}>{props.name}</h3>
        <div className={classes.description}>{props.description}</div>
        <div className={classes.price}>{price}</div>
      </div>
      <div>
        <PizzaItemForm onAddToCart={addToCartHandler} />
      </div>
    </li>
  );
};
export default PizzaItem;
