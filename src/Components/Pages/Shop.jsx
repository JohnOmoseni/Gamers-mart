import useShopContext from "../../Context/ShopContext";
import GameCard from "../Layouts/Main/GameCard";
import { motion } from "framer-motion";

const shopVariant = {
  hidden: {
    opacity: 0,
    x: -window.innerWidth,
  },
  animate: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.4 },
  },
  exit: {
    opacity: 0,
    x: window.innerWidth,
    transition: { duration: 0.4 },
  },
};

function Shop() {
  const { products } = useShopContext();

  return (
    <motion.div
      className="shop"
      variants={shopVariant}
      initial="hidden"
      animate="animate"
      exit="exit"
    >
      <div className="content">
        <h2 className="fw-bold">Shop for Games</h2>
        <div className="slider">
          <div className="slider-track snaps-inline">
            {products?.map(item => {
              return <GameCard key={item.id} {...item} />;
            })}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Shop;
