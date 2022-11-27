import React, { useState } from "react";
import Cart from "./components/Cart/Cart";
import Header from "./components/Layout/Header";
import Meals from "./components/Meals/Meals";
import CartProvider from "./store/CartProvider";

function App() {
  const [showCartModal, setShowCartModal] = useState(false);

  const showCartHandler = () => {
    setShowCartModal(true);
  };
  const hideCartHandler = () => {
    setShowCartModal(false);
  };

  return (
    <CartProvider>
      {showCartModal && <Cart onHideCart={hideCartHandler} />}
      <Header onShowCart={showCartHandler} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
