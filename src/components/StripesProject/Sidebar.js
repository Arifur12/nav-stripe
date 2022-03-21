import React from "react";
import { useGlobalContext } from "../../context/context";
import sublinks from "../../data/dataStripe";

export default function Sidebar() {
  const { isSidebarOpen, closeSidebar } = useGlobalContext();
  return (
    <aside
      className={`${
        isSidebarOpen ? "sidebar-wrapper show" : "sidebar-wrapper"
      }`}
    >
      <div className="sidebar">
        <button className="close-btn" onClick={closeSidebar}>
          X
        </button>
        <div className="sidebar-links">
          {sublinks.map((sublink, index) => (
            <article key={index}>
              <h4>{sublink.page}</h4>
              <div className="sidebar-sublinks">
                {sublink.links.map((link, index) => {
                  const { url, icon, label } = link;
                  return (
                    <a key={index} href={url}>
                      {icon}
                      {label}
                    </a>
                  );
                })}
              </div>
            </article>
          ))}
        </div>
      </div>
    </aside>
  );
}
