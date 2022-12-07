import Input from "../UI/Input";
import classes from "./MealItemForm.module.css";
import { useContext, useRef } from "react";
import CartContext from "./../../store/cart-context";

const MealItemForm = (props) => {
  const amountInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enterdAmount = Number(amountInputRef.current.value);

    props.onAddToCart(enterdAmount);
  };

  const ctx = useContext(CartContext);
  return (
    <form className={classes.form} onSubmit={submitHandler}>
      <Input
        ref={amountInputRef}
        label="Amount"
        input={{
          id: `amount`,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealItemForm;
