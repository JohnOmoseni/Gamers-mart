import React from "react";
import useShopContext from "../../../Context/ShopContext";

import BrowseProducts from "./BrowseProducts";
import HeroCard from "./HeroCard";
import SubHero from "./SubHero";

function Hero() {
  const { products } = useShopContext();

  const HeroSlice = products.slice(0, 5);

  return (
    <section id="hero-section">
      <div className="hero">
        <BrowseProducts />

        <div className="hero-sales">
          {HeroSlice.map(product => {
            return <HeroCard key={product.id} {...product} />;
          })}
        </div>
      </div>

      <SubHero />
    </section>
  );
}

export default Hero;
