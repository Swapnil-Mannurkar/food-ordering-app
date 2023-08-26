import { useRef, useState } from "react";
import classes from "./Checkout.module.css";

const Checkout = (props) => {
  const [fromInputsValidity, setFromInputsValidity] = useState({
    name: true,
    street: true,
    postalCode: true,
    city: true,
  });

  const nameInputRef = useRef();
  const streetInputRef = useRef();
  const postalCodeInputRef = useRef();
  const cityInputRef = useRef();

  const isEmpty = (value) => value.trim() === "";
  const isFiveChars = (value) => value.trim().length >= 5;

  const onCancelHandler = (event) => {
    event.preventDefault();
    props.onCancel();
  };

  const confirmHandler = (event) => {
    event.preventDefault();

    const name = nameInputRef.current.value;
    const street = streetInputRef.current.value;
    const code = postalCodeInputRef.current.value;
    const city = cityInputRef.current.value;

    const enteredNameIsValid = !isEmpty(name);
    const enteredStreetIsValid = !isEmpty(street);
    const enteredPostalCodeIsValid = isFiveChars(code);
    const enteredCityIsValid = !isEmpty(city);

    setFromInputsValidity({
      name: enteredNameIsValid,
      street: enteredStreetIsValid,
      postalCode: enteredPostalCodeIsValid,
      city: enteredCityIsValid,
    });

    const formIsValid =
      enteredNameIsValid &&
      enteredStreetIsValid &&
      enteredPostalCodeIsValid &&
      enteredCityIsValid;

    if (!formIsValid) {
      return;
    }

    const data = { name, street, code, city };

    props.onSubmitData(data);

    nameInputRef.current.value = "";
    streetInputRef.current.value = "";
    postalCodeInputRef.current.value = "";
    cityInputRef.current.value = "";
  };

  return (
    <form className={classes.form}>
      <div className={classes.control}>
        <label>Your Name:</label>
        <input type="text" id="name" ref={nameInputRef} />
        {!fromInputsValidity.name && (
          <p style={{ color: "red" }}>Please enter valid name</p>
        )}
      </div>
      <div className={classes.control}>
        <label>Street</label>
        <input type="text" id="street" ref={streetInputRef} />
        {!fromInputsValidity.street && (
          <p style={{ color: "red" }}>Please enter valid street name</p>
        )}
      </div>
      <div className={classes.control}>
        <label>Postal</label>
        <input type="text" id="postal" ref={postalCodeInputRef} />
        {!fromInputsValidity.postalCode && (
          <p style={{ color: "red" }}>Please enter postal code</p>
        )}
      </div>
      <div className={classes.control}>
        <label>City</label>
        <input type="text" id="city" ref={cityInputRef} />
        {!fromInputsValidity.city && (
          <p style={{ color: "red" }}>Please enter valid city name</p>
        )}
      </div>
      <div className={classes.actions}>
        <button type="button" onClick={onCancelHandler}>
          Cancel
        </button>
        <button onClick={confirmHandler} className={classes.submit}>
          Confirm
        </button>
      </div>
    </form>
  );
};

export default Checkout;
