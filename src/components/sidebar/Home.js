import React from "react";
import burgerIcon from "../../assets/menu_black_24dp.svg";
import { useGlobalContext } from "../../context/context";

export default function Home() {
  const { openSidebar, closeSidebar, isSidebarOpen } = useGlobalContext();
  console.log(isSidebarOpen);
  return (
    <div>
      <main>
        <button onClick={openSidebar} className="sidebar-toggle">
          <img src={burgerIcon} alt="" />
        </button>
      </main>
    </div>
  );
}
