import classes from "./Header.module.css";
import meal from "../../assets/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className={classes.header}>
        <h1>ReactMeals</h1>
        <HeaderCartButton onClick={props.onShowCart} />
      </header>
      <div className={classes.main_image}>
        <img src={meal} alt="" />
      </div>
    </>
  );
};

export default Header;
