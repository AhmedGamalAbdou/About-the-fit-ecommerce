import React from "react";
import { NavLink } from "react-router-dom";

const SidebarDash = () => {
  const activeLink = "text-blue-400";
  const normalLink = "";
  return (
    <>
      <div className=" md:flex md:mx-14  w-full  hidden mt-10 ">
        <ul className="space-y-8  pt-8 pb-8 flex flex-col  ">
          <p className="text-left uppercase text-lg font-bold">
            {" "}
            About the fit
          </p>

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
    </>
  );
};

export default SidebarDash;
