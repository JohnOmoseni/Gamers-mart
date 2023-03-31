import { FiPhone } from "react-icons/fi";

function Top() {
  return (
    <nav className="top-nav">
      <div className="even-cols">
        <p>
          <FiPhone />
          <span>Call:</span>
        </p>

        <p className="fs-small">+23481684612</p>
      </div>
      <div className="even-cols">
        <i className="fa fa-user"></i>
        <p className="fs-small fw-semi-bold">Shop for games</p>
      </div>
    </nav>
  );
}

export default Top;
