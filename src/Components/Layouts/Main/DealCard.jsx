import React, { useEffect, useState } from "react";
import useShopContext from "../../../Context/ShopContext";

function DealCard({ id, img, price, title }) {
  const { cart, addToCart, removeFromCart } = useShopContext();

  const [isInCart, setIsInCart] = useState(false);

  useEffect(() => {
    const product = cart.find(item => item.id === id);
    if (product) setIsInCart(true);
    else setIsInCart(false);
  }, [id, cart]);

  const handleClick = () => {
    const product = { id, img, title, price };
    if (isInCart) removeFromCart(id);
    else addToCart(product);
  };

  return (
    <div className="game-item">
      <img src={img} alt={title} />
      <div className="item-offer">
        <p className="label fs-small">Weekend Offer</p>
        <h2 className="fw-semi-bold game-item-title">{title}</h2>
        <p className="price fs-small">Save {`$${price}`}</p>
        <button onClick={() => handleClick(id, img, title, price)}>
          {isInCart ? "Remove from Cart" : "Buy Now"}
          <span>&rarr;</span>
        </button>
      </div>
    </div>
  );
}

export default DealCard;
