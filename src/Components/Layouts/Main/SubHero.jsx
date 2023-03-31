import useShopContext from "../../../Context/ShopContext";

import { FaTruck } from "react-icons/fa";
import { FaExchangeAlt } from "react-icons/fa";
import { GiPriceTag } from "react-icons/gi";
import { RiCustomerService2Line } from "react-icons/ri";

export const Content = ({ title, subtitle, icon: Icon }) => {
  return (
    <div className="offer">
      <span>
        <Icon size="30" />
      </span>
      <div>
        <p className="fw-bold">{title}</p>
        <p>{subtitle}</p>
      </div>
    </div>
  );
};

function SubHero() {
  const { products } = useShopContext();
  const subHeroSlice = products.slice(5, 7);

  return (
    <div className="sub-hero">
      <div className="sub-hero-images hero-img">
        {subHeroSlice.map(({ id, img, title }, idx) => {
          return (
            <div key={id} className="hero-img">
              <img src={img} alt={title} />
            </div>
          );
        })}
      </div>

      <div className="offer-box">
        <Content icon={FaTruck} title="Free Shipping" subtitle="Order $50 or more " />
        <Content icon={FaExchangeAlt} title="Free Returns" subtitle="Within 7 days" />
        <Content icon={GiPriceTag} title="Get 20% Off 1 Item" subtitle="When you sign up" />
        <Content
          icon={RiCustomerService2Line}
          title="We Support"
          subtitle="24/7 Amazing Services"
        />
      </div>
    </div>
  );
}

export default SubHero;
