import React, { useEffect } from "react";
import useShopContext from "../../../Context/ShopContext";
import DealCard from "./DealCard";

function Deals() {
  const { products } = useShopContext();

  const slice = products.slice(13, 18);
  return (
    <section id="deals">
      <div className="amazing-deals">
        {slice.map(product => {
          return <DealCard key={product.id} {...product} />;
        })}
      </div>
    </section>
  );
}

export default Deals;
