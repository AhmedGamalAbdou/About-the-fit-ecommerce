import React from "react";
import { NavLink } from "react-router-dom";

const SidebarDash = () => {
  return (
    <div className="col-span-2 border-r border-gray-200 min-h-[90vh] w-[120px] lg:w-[250px] flex flex-col items-start justify-between pt-8 px-1">
      <ul className="space-y-8 w-full font-bold  border-t-2 border-b-2 px-4 pt-8 pb-8 flex flex-col ">
        <NavLink to="/dashboard"> Dashboard</NavLink>
        <NavLink to="products"> Products</NavLink>
        <NavLink to="categories"> Categories </NavLink>
        <NavLink to="addproduct"> Add Products</NavLink>
        <NavLink to="addcategory"> Add Category</NavLink>
        <NavLink to="subscibers"> Subscribers</NavLink>
        <NavLink to="messages"> Messages</NavLink>
        <NavLink to="/"> Logout </NavLink>
        <NavLink> edit </NavLink>
      </ul>
    </div>
  );
};

export default SidebarDash;
