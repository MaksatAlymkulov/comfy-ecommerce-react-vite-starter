import { Link } from "react-router-dom";
import { useMyCustomContext } from "../hooks/custom";

function SideBar() {
  const { showSideBar, setShowSideBar } = useMyCustomContext();

  const toggle = showSideBar ? "sidebar-overlay show" : "sidebar-overlay";
  return (
    <div className={toggle}>
      <aside className="sidebar">
        <button
          onClick={() => setShowSideBar(!showSideBar)}
          className="sidebar-close"
        >
          <i className="fa fa-times"></i>
        </button>
        {/* links */}
        <ul className="sidebar-links">
          <li>
            <Link
              to="/"
              className="sidebar-link"
              onClick={() => setShowSideBar(!showSideBar)}
            >
              <i className="fa fa-home fa-fw"></i>
              home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="sidebar-link"
              onClick={() => setShowSideBar(!showSideBar)}
            >
              <i className="fa fa-couch fa-fw"></i>
              products
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="sidebar-link"
              onClick={() => setShowSideBar(!showSideBar)}
            >
              <i className="fa fa-book fa-fw"></i>
              about
            </Link>
          </li>
        </ul>
      </aside>
    </div>
  );
}

export default SideBar;
