import { useState, useEffect } from "react";
import useShopContext from "../../../Context/ShopContext";

function HeroCard({ id, img, title, price }) {
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
    <div className="hero-img">
      <img src={img} alt={title} />
      <div className="item-offer">
        <p className="fs-small">{isInCart ? "Pre-Ordered" : "Pre-Order Now"}</p>
        <h1 className="fw-bold game-item-title">{title}</h1>
        <button onClick={handleClick}>
          {isInCart ? "Remove from Cart" : "Buy Now"}
          <span>&rarr;</span>
        </button>
      </div>
    </div>
  );
}

export default HeroCard;
