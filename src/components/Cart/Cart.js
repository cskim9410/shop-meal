import classes from "./Cart.module.css";
import Modal from "./../UI/Modal";
import { useContext } from "react";
import CartContext from "./../../store/cart-context";
import CartItem from "./CartItem";

const Cart = (props) => {
  const cartCtx = useContext(CartContext);
  const cartItemRemoveHandler = (id) => {};
  const cartItemAddHandler = (item) => {};

  const cartItems = cartCtx.items.map((item) => (
    <CartItem
      key={item.id}
      name={item.name}
      price={item.price}
      amount={item.amount}
      onRemove={cartItemRemoveHandler}
      onAdd={cartItemAddHandler}
    />
  ));

  const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
  return (
    <Modal onHideCart={props.onHideCart}>
      <ul className={classes["cart-items"]}>{cartItems}</ul>
      <div className={classes.total}>
        <span>Total Amount</span>
        <span>{totalAmount}</span>
      </div>
      <div onClick={props.onHideCart} className={classes.actions}>
        <button className={classes["button-alt"]}>Close</button>
        {cartCtx.items.length > 0 && (
          <button className={classes.button}>Order</button>
        )}
      </div>
    </Modal>
  );
};

export default Cart;
