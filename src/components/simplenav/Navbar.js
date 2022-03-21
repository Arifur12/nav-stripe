import { useEffect, useRef, useState } from "react";
import burgerIcon from "../assets/menu_black_24dp.svg";
import cartIcon from "../assets/shopping_cart_black_24dp.svg";
import { links } from "../data/data";
import "./Navbar.css";

export default function Navbar() {
  const [showLinks, setShowLinks] = useState(false);
  const linksContainerRef = useRef(null);
  const linkRef = useRef(null);
  useEffect(() => {
    const linksHeight = linkRef.current.getBoundingClientRect().height;
    console.log(linksHeight);
    if (showLinks) {
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      linksContainerRef.current.style.height = `0px`;
    }
  }, [showLinks]);
  return (
    <nav>
      <div className="nav">
        <div className="nav-header">
          <button
            onClick={() => setShowLinks(!showLinks)}
            className="nav-toggle"
          >
            <img src={burgerIcon} alt="" />
          </button>
          <div>
            <h1 className="logo">
              Riad<span>Mart</span>
            </h1>
          </div>
          <div>
            <img src={cartIcon} alt="" />
          </div>
        </div>
        <div
          ref={linksContainerRef}
          className={`${showLinks ? "nav-links nav-show" : "nav-links"}`}
        >
          <ul className="links" ref={linkRef}>
            {links.map((link) => (
              <li key={link.id}>
                <a href={link.url}>{link.text}</a>
              </li>
            ))}
          </ul>
        </div>

        <ul className="nav-icons">
          <li>
            <a href="#">icon</a>
          </li>
          <li>
            <a href="#">icon</a>
          </li>
          <li>
            <a href="#">icon</a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
