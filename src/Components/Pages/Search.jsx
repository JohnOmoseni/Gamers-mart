import { useEffect, useRef } from "react";
import { useSearchParams } from "react-router-dom";
import useShopContext from "../../Context/ShopContext";
import GameCard from "../Layouts/Main/GameCard";

import { motion } from "framer-motion";

const searchVariant = {
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

function Search() {
  const { products } = useShopContext();
  const [searchParams] = useSearchParams();
  const searchRef = useRef();

  const searchTerm = searchParams.get("term") || "";

  useEffect(() => {
    if (searchRef.current) searchRef.current.scrollIntoView();
  }, []);

  let filteredProducts = [];
  if (searchTerm !== "") {
    filteredProducts = products.filter(item =>
      item.title.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  return (
    <motion.div
      className="search-container"
      ref={searchRef}
      variants={searchVariant}
      initial="hidden"
      animate="animate"
      exit="exit"
    >
      <div className="content">
        <h2 className="fw-bold">
          Search <span>{searchTerm}</span>{" "}
        </h2>
        <div className="slider">
          <div className="slider-track snaps-inline">
            {filteredProducts.length
              ? filteredProducts?.map(item => {
                  return <GameCard key={item.id} {...item} />;
                })
              : `${searchTerm} cannot be found`}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default Search;
