import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setShowSideBar } from "../store/comfySlice";

function NavBarLinks() {
  const dispatch = useDispatch();
  return (
    <div>
      <button onClick={() => dispatch(setShowSideBar())} className="toggle-nav">
        <i className="fa fa-bars"></i>
      </button>
      <ul className="nav-links">
        <li>
          <Link to="/" className="nav-link">
            home
          </Link>
        </li>
        <li>
          <Link to="/products" className="nav-link">
            products
          </Link>
        </li>
        <li>
          <Link to="/about" className="nav-link">
            about
          </Link>
        </li>
      </ul>
    </div>
  );
}

export default NavBarLinks;
