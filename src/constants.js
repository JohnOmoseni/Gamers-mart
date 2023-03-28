import { TbHome } from "react-icons/tb";
import { FiShoppingCart } from "react-icons/fi";
import { HiOutlineUserGroup } from "react-icons/hi";
import { RiContactsBookLine } from "react-icons/ri";

import { FaChartLine } from "react-icons/fa";
import { RiMedal2Fill } from "react-icons/ri";
import { RiVipDiamondFill } from "react-icons/ri";
import { RiShip2Fill } from "react-icons/ri";

export const navLinks = [
  {
    title: "Home",
    to: "/home",
    icon: TbHome,
  },
  {
    title: "Shop",
    to: "/shop",
    icon: FiShoppingCart,
  },
  {
    title: "About Us",
    to: "/about",
    icon: HiOutlineUserGroup,
  },
  {
    title: "Contact Us",
    to: "/contact-us",
    icon: RiContactsBookLine,
  },
];

export const cardAboutDetails = [
  {
    icon: FaChartLine,
    title: "Experience",
    subtitle:
      "Our team has a combined experience of over 20 years in the ecommerce industry. We've seen the industry grow and evolve, and we are always adapting to stay ahead of the curve. We are constantly seeking out new products and innovations to bring to our customers, and we pride ourselves on providing excellent customer service.",
  },
  {
    icon: RiMedal2Fill,
    title: "Customers Reviews",
    subtitle:
      "We believe in transparency and honesty, which is why we encourage our customers to leave reviews of their experience with us. We value all feedback, whether it's positive or negative, as it helps us to improve our services and products. We have a 4.8-star rating on Trustpilot, which we are incredibly proud of. Our customers consistently praise our fast shipping, quality products, and exceptional customer service.",
  },
  {
    icon: RiVipDiamondFill,
    title: "Quality Products",
    subtitle:
      "We source our products from trusted suppliers, ensuring that they are of the highest quality. Our team carefully curates each product, selecting only the best for our customers. We believe that everyone should have access to quality products, which is why we offer a wide range of products at affordable prices.",
  },
  {
    icon: RiShip2Fill,
    title: "Fast Shipping",
    subtitle:
      "We know that waiting for your order to arrive can be frustrating, which is why we offer fast and reliable shipping. We aim to dispatch all orders within 24 hours, and our shipping partners deliver quickly and efficiently. We also provide tracking information for your order, so you can keep an eye on its progress.",
  },
];
