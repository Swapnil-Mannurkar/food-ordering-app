import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const onCancelHandler = (event) => {
    event.preventDefault();
    props.onCancel();
  };

  return (
    <form>
      <div className={classes.control}>
        <label>Your Name:</label>
        <input type="text" id="name" />
      </div>
      <div className={classes.control}>
        <label>Street</label>
        <input type="text" id="street" />
      </div>
      <div className={classes.control}>
        <label>Postal</label>
        <input type="text" id="postal" />
      </div>
      <div className={classes.control}>
        <label>City</label>
        <input type="text" id="city" />
      </div>
      <button onClick={onCancelHandler}>Cancel</button>
      <button>Confirm</button>
    </form>
  );
};

export default Checkout;
