import React, { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import useShopContext from "../../Context/ShopContext";
import CartItem from "../Layouts/CartItem";

import "/sass/pages/cart-page.scss";

const cartVariant = {
  hidden: {
    opacity: 0,
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.4 },
  },
  exit: {
    opacity: 0,
    x: window.innerWidth,
    transition: { duration: 0.4 },
  },
};

function Cart() {
  const { cart, total, updatePrice } = useShopContext();
  const totalPrice = total;
  const noOfItems = cart.length ? cart.length : 0;
  const cartRef = useRef();

  useEffect(() => {
    updatePrice(cart);

    if (cartRef.current) cartRef.current.scrollIntoView();
  }, []);

  return (
    <motion.section
      id="cart-page"
      ref={cartRef}
      variants={cartVariant}
      initial="hidden"
      animate="animate"
      exit="exit"
    >
      <div className="cart">
        <ul className="even-rows">
          {cart.length > 0 ? (
            cart?.map(item => {
              return <CartItem key={item.id} {...item} />;
            })
          ) : (
            <li className="no-item">No Items in your cart</li>
          )}
        </ul>

        <div className="checkout even-column">
          <div>
            <p className="quantity | fw-semi-bold">
              Items: {noOfItems > 1 ? `${noOfItems} items` : `${noOfItems} item`}
            </p>
            <h1 className="fw-bold">Total: ${totalPrice}</h1>
          </div>
          <Link to="/payment" className="fw-semi-bold">
            Proceed to CheckOut
          </Link>
        </div>
      </div>
    </motion.section>
  );
}

export default Cart;
