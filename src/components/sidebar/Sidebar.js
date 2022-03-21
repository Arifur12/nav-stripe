import React from "react";
import CloseIcon from "../../assets/CloseIcon";
import { useGlobalContext } from "../../context/context";
import { links, social } from "../../data/data";
import "./Sidebar.css";

export default function Sidebar() {
  const { closeSidebar, isSidebarOpen } = useGlobalContext();
  return (
    <div>
      <aside className={`sidebar show-sidebar`}>
        <div className="sidebar-header">
          <h1>
            Riad<span>Mart</span>
          </h1>
          <button onClick={closeSidebar} className="close-btn ">
            <CloseIcon />
          </button>
        </div>
        {isSidebarOpen && (
          <ul className="links">
            {links.map((link) => (
              <li key={link.id}>
                <a href={link.url}> {link.text}</a>
              </li>
            ))}
          </ul>
        )}

        <ul className="social.icons">
          {social.map((link) => (
            <li key={link.id}>
              <a href={link.url}></a>
            </li>
          ))}
        </ul>
      </aside>
    </div>
  );
}
