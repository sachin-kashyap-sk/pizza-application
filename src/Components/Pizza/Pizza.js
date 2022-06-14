import { Fragment } from "react";
import AvailablePizza from "./AvailablePizza";
import PizzaSummary from "./pizzaSummary";
const Pizza = () => {
  return(
  <Fragment>
    <AvailablePizza />
    <PizzaSummary />
  </Fragment>
  )
};
export default Pizza;
