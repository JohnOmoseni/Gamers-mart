import { useEffect, useState } from "react";
import useShopContext from "../../../Context/ShopContext";

import { AiOutlineShoppingCart } from "react-icons/ai";
import { MdRemoveShoppingCart } from "react-icons/md";

import { FiHeart } from "react-icons/fi";
import { IoMdHeart } from "react-icons/io";

function GameCard({ id, img, title, genre, price, showPrice }) {
  const { cart, addToCart, removeFromCart } = useShopContext();
  const [isInCart, setIsInCart] = useState(false);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    const product = cart.find(item => item.id === parseInt(id));

    if (product) setIsInCart(true);
    else setIsInCart(false);
  }, [id, cart]);

  const handleClick = () => {
    const product = { id, img, title, price };
    if (isInCart) removeFromCart(id);
    else addToCart(product);
  };
  return (
    <div className="game-card">
      <div className="img-box">
        <img src={img} alt={title} />

        <div className="top fw-semi-bold">Top</div>
        <div className="add-to-cart slide | fw-semi-bold" onClick={handleClick}>
          {isInCart ? (
            <>
              <p>Remove From cart</p>
              <MdRemoveShoppingCart />
            </>
          ) : (
            <>
              <p>Add to cart</p>
              <AiOutlineShoppingCart />
            </>
          )}
        </div>
        <div className="favorite slide" onClick={() => setIsClicked(prev => !prev)}>
          <IoMdHeart fill={isClicked ? "#dc143c" : "currentColor"} />
        </div>
      </div>

      <div className="details">
        <p className="game-genre truncate | fs-small fw-semi-bold">{genre}</p>
        <h3 className="fw-semi-bold">{title}</h3>
        {showPrice && <p className="price | fw-semi-bold">{`$${price}`}</p>}
      </div>
    </div>
  );
}

export default GameCard;
