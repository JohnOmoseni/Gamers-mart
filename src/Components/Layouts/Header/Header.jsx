import React, { useState } from "react";
import { Link } from "react-router-dom";
import useShopContext from "../../../Context/ShopContext";
import { motion } from "framer-motion";

import { HiShoppingCart } from "react-icons/hi";
import Nav from "./Nav";
import Top from "./Top";
import NavLaptop from "./NavLaptop";

const animateHeader = {
  hidden: {
    opacity: 0,
    y: -100,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      type: "spring",
      stiffness: 200,
    },
  },
};

function Header({ elem, search, onInputChange, handleSearch }) {
  const { cart } = useShopContext();
  const [openMenu, setOpenMenu] = useState(false);

  const handleCloseMenu = () => {
    setOpenMenu(false);
  };

  return (
    <motion.header ref={elem} variants={animateHeader} initial="hidden" animate="visible">
      <Top />
      <nav className="index-nav">
        <div className="index even-cols">
          <div className="menu-icon" onClick={() => setOpenMenu(prev => !prev)}>
            <span className="menu-span"></span>
          </div>
          <Link to="/">
            <h1 className="fw-bold">
              Gamers<span>mart</span>
            </h1>
          </Link>
        </div>
        <form onSubmit={handleSearch}>
          <input
            type="text"
            value={search}
            onChange={e => onInputChange(e)}
            placeholder="Search product..."
          />
        </form>
        <Link to="/cart" className="cart-box" title="Cart">
          <span className="shopping-cart">
            <HiShoppingCart size={25} />
          </span>
          <p className="fw-semi-bold">{cart?.length}</p>
        </Link>
      </nav>
      <NavLaptop />
      {openMenu && (
        <Nav
          search={search}
          handleCloseMenu={handleCloseMenu}
          onInputChange={onInputChange}
          setOpenMenu={setOpenMenu}
          handleSearch={handleSearch}
        />
      )}
    </motion.header>
  );
}

export default Header;
