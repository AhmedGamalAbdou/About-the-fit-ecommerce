import React from "react";
import NavDash from "../compoents/NavDash";
import SidebarDash from "../compoents/SidebarDash";
import { Outlet } from "react-router-dom";

const LayoutDash = () => {
  return (
    <div>
      <NavDash />

      <div className="flex flex-row ">
        <div>
          <SidebarDash />
        </div>
        <div className="w-full px-8 py-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LayoutDash;
