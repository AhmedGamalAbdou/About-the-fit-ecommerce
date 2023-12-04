import React from "react";
import { NavLink } from "react-router-dom";

const SidebarDash = () => {
  const activeLink = "text-blue-400";
  const normalLink = "";
  return (
    <div className=" border-r border-gray-400 h-[90vh] w-[120px] lg:w-[350px] flex flex-col pt-8 px-1">
      <div>
        <h2 className="text-4xl font-bold"> About the fit</h2>
      </div>
      <div className="flex flex-col flex-1 w-64 p-4 mt-4  ">
        <ul className="space-y-8 font-bold  border-t-2 border-b-2 pt-8 pb-8 flex flex-col ">
          <NavLink
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
            to="/dashboard"
            end
          >
            {" "}
            Dashboard
          </NavLink>
          <NavLink
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
            to="products"
          >
            {" "}
            Products
          </NavLink>
          <NavLink
            to="categories"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            Categories
          </NavLink>
          <NavLink
            to="addproduct"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            {" "}
            Add Products
          </NavLink>
          <NavLink
            to="addcategory"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            {" "}
            Add Category
          </NavLink>
          <NavLink
            to="subscibers"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            {" "}
            Subscribers
          </NavLink>
          <NavLink
            to="messages"
            className={({ isActive }) => (isActive ? activeLink : normalLink)}
          >
            {" "}
            Messages
          </NavLink>
        </ul>
      </div>
      <NavLink to="/">
        <span className="text-2xl font-bold flex">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-8 h-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75"
            />
          </svg>
          Logout
        </span>
      </NavLink>
    </div>
  );
};

export default SidebarDash;
