import React from "react";
import useShopContext from "../../../Context/ShopContext";
import GameCard from "./GameCard";

function Categories() {
  const { products } = useShopContext();

  const trendingSlice = products.slice(7, 13);

  return (
    <section id="categories">
      <div className="categories-wrapper">
        <div className="heading">
          <h2 className="fw-bold">Now Trending</h2>
        </div>
        <div className="swiper-carousel">
          <div className="swiper-track snaps-inline">
            {trendingSlice.map(item => {
              return <GameCard key={item.id} {...item} showPrice />;
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Categories;
