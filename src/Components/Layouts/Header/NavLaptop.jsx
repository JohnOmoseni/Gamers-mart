import { FaRegLightbulb } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { navLinks } from "../../../constants";

function NavLaptop() {
  return (
    <div className="nav-links-laptop">
      <ul>
        {navLinks.map(({ title, to }, idx) => (
          <li key={idx}>
            <NavLink to={to} className="link">
              {title}
            </NavLink>
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

export default NavLaptop;
