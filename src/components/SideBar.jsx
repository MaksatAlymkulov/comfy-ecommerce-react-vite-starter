import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { setShowSideBar } from "../store/comfySlice";

function SideBar() {
  const showSideBar = useSelector((state) => state.comfyState.showSideBar);
  const dispatch = useDispatch();

  const toggle = showSideBar ? "sidebar-overlay show" : "sidebar-overlay";
  return (
    <div className={toggle}>
      <aside className="sidebar">
        <button
          onClick={() => dispatch(setShowSideBar())}
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
              onClick={() => dispatch(setShowSideBar())}
            >
              <i className="fa fa-home fa-fw"></i>
              home
            </Link>
          </li>
          <li>
            <Link
              to="/products"
              className="sidebar-link"
              onClick={() => dispatch(setShowSideBar())}
            >
              <i className="fa fa-couch fa-fw"></i>
              products
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="sidebar-link"
              onClick={() => dispatch(setShowSideBar())}
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
