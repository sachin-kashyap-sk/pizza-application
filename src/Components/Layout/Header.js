import React from "react";
import pizzaImage from "../../Assets/pizza.jpg";
import classes from "./Header.module.css";
import HeaderCartButton from "./HeaderCartButton";


// @Params props.onShowCart
const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>Pizza</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes.pizzaImage}>
        <img
          width="100%"
          height="100%"
          src={pizzaImage}
          alt="A Table full of pizza"
        />
      </div>
    </>
  );
};
export default Header;
