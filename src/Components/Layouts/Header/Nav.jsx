import { NavLink } from "react-router-dom";
import { navLinks } from "../../../constants";
import { FaRegLightbulb } from "react-icons/fa";

function Nav({ handleCloseMenu, setOpenMenu, search, onInputChange, handleSearch }) {
  const handleSubmit = e => {
    handleSearch(e);
    setOpenMenu(false);
  };

  return (
    <div className="nav-links">
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
    </div>
  );
}

export default Nav;
