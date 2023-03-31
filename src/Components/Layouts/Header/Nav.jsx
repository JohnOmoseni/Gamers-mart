import { NavLink } from "react-router-dom";
import { navLinks } from "../../../constants";
import { FaRegLightbulb } from "react-icons/fa";
import { motion } from "framer-motion";

const navVariant = {
  hidden: {
    x: -window.innerWidth,
    opacity: 0,
  },
  animate: {
    x: 0,
    opacity: 1,
    transition: { ease: "easeIn", duration: 0.5, type: "spring" },
  },
  exit: {
    x: window.innerWidth,
    opacity: 0,
    transition: { ease: "easeOut", duration: 0.5, when: "beforeChildren" },
  },
};

function Nav({ handleCloseMenu, setOpenMenu, search, onInputChange, handleSearch }) {
  const handleSubmit = e => {
    handleSearch(e);
    setOpenMenu(false);
  };

  return (
    <motion.div
      className="nav-links"
      variants={navVariant}
      initial="hidden"
      animate="animate"
      exit="exit"
    >
      <span className="close-btn | fw-bold" onClick={handleCloseMenu}>
        &#10006;
      </span>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={search}
          name="search-products"
          placeholder="Search product..."
          onChange={onInputChange}
        />
        <button type="submit">&#10148;</button>
      </form>
      <ul>
        {navLinks.map(({ title, to, icon: Icon }, idx) => (
          <li key={idx} onClick={() => setOpenMenu(false)}>
            <span className="icon">
              <Icon />
            </span>
            <NavLink to={to}>{title}</NavLink>
          </li>
        ))}
      </ul>
      <div>
        <FaRegLightbulb />
        <p className="discount-text">Clearance up to 30% off</p>
      </div>
    </motion.div>
  );
}

export default Nav;
