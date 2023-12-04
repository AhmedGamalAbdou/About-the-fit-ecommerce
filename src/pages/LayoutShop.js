import React from "react";
import SideBarFilter from "../compoents/SideBarFilter";
import Header from "../compoents/Header";
import { Outlet } from "react-router-dom";

const LayoutShop = () => {
  return (
    <div>
      <Header />

      <div className="flex flex-row">
        <div>
          <SideBarFilter />
        </div>
        <div className="w-full px-8 py-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default LayoutShop;
