import useShopContext from "../../Context/ShopContext";
import { HiOutlineTrash } from "react-icons/hi";

function CartItem({ id, title, price, img }) {
  const { removeFromCart } = useShopContext();

  const handleDelete = () => {
    removeFromCart(id);
  };
  return (
    <li className="cart-details">
      <div className="game">
        <div className="game-cover">
          <img src={img} />
        </div>
        <h2 className="fw-bold">{title}</h2>
      </div>
      <p className="price fw-semi-bold">{price}</p>
      <span className="delete-item" onClick={handleDelete} title="Delete item">
        <HiOutlineTrash />
      </span>
    </li>
  );
}

export default CartItem;
