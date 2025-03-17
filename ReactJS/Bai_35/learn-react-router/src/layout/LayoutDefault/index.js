import "./LayoutDefault.scss";
import { Link, NavLink, Outlet } from "react-router-dom";
function LayoutDefault() {
  return (
    <>
      <div className="layout-default">
        <header className="layout-default__header">
          <div className="layout-default__logo">Logo</div>
          <div className="layout-default__menu">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/about">About</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
              <li>
                <NavLink to="/blog">Blog</NavLink>
              </li>
            </ul>
          </div>
        </header>
        <main className="layout-default__main">
          <Outlet></Outlet>
        </main>
        <footer className="layout-default__footer">
          Copyright @ 2025 by DUCA
        </footer>
      </div>
    </>
  );
}

export default LayoutDefault;
