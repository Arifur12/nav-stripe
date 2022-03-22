import React from "react";
import Bars from "../../assets/Bars";
import { useGlobalContext } from "../../context/context";

export default function Navbar() {
  const { openSidebar, openSubmenu, closeSubmenu } = useGlobalContext();
  const displaySubmenu = (e) => {
    // MATHFFFFFF FOR LOCATION OF SUBMENU POP
    const page = e.target.textContent;

    const tempBtn = e.target.getBoundingClientRect();
    const center = (tempBtn.left + tempBtn.right) / 2;
    const bottom = tempBtn.bottom - 3;
    openSubmenu(page, { center, bottom });
  };
  return (
    <nav className="nav">
      <div className="nav-center">
        <div className="nav-header">
          <h1>
            Riad<span>Mart</span>{" "}
          </h1>
          <button onClick={openSidebar} className="btn toggle-btn">
            <Bars />
          </button>
        </div>
        <ul className="nav-links ">
          <li>
            <button onMouseOver={displaySubmenu} className="link-btn">
              products
            </button>
          </li>
          <li>
            <button onMouseOver={displaySubmenu} className="link-btn">
              developers
            </button>
          </li>
          <li>
            <button onMouseOver={displaySubmenu} className="link-btn">
              company
            </button>
          </li>
        </ul>
        <button className="btn signin-btn">Sign In</button>
      </div>
    </nav>
  );
}
