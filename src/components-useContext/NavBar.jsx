import logoBlack from "../images/logo-black.png";
import { useLocation, useNavigate } from "react-router-dom";
import logoWhite from "../images/logo-white.png";
import CartIcon from "./CartIcon";
import NavBarLinks from "./NavBarLinks";

function NavBar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  return (
    <nav className={pathname == "/" ? "navbar" : "navbar page"}>
      <div className="nav-center">
        <NavBarLinks />
        <img
          onClick={() => navigate("/")}
          src={pathname == "/" ? logoWhite : logoBlack}
          className="nav-logo"
          alt="logo"
        />
        <CartIcon />
      </div>
    </nav>
  );
}

export default NavBar;
