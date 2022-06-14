import classes from "./pizzaSummary.module.css";

const PizzaSummary = () => {
  return (
    <section className={classes.summary}>
      <h2>Delicious pizza, Delivered To You</h2>
      <p>
        Choose your favorite pizza from our broad selection of available pizza
        and enjoy a delicious pizza  at home.
      </p>
      <p>
        All our pizza are cooked with high-quality ingredients, just-in-time and
        of course by experienced chefs!
      </p>
    </section>
  );
};

export default PizzaSummary;
