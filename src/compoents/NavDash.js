import React from "react";
import { NavLink } from "react-router-dom";
import { ClickOutsideFucn } from "../compoents/ClickOutside";
import { useState } from "react";

const NavDash = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  let menuNode = ClickOutsideFucn(() => {
    setIsMenuOpen(false);
  });
  const activeLink = "text-blue-400";
  const normalLink = "";
  return (
    <div className="w-full flex bg-blue-400 justify-between items-center py-2 px-6 text-zinc-50 ">
      <div>
        <button onClick={() => setIsMenuOpen((isMenuOpen) => !isMenuOpen)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-12 h-8"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M3.75 9h16.5m-16.5 6.75h16.5"
            />
          </svg>
        </button>
      </div>
      <div className="  flex items-center justify-center text-2xl font-bold">
        About The Fit
      </div>
      <div className="  flex items-center  justify-end">
        <NavLink to="messages">
          <button className="px-2">
            {""}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-8 h-8"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75"
              />
            </svg>
          </button>
        </NavLink>

        <NavLink to="/">
          <button> Logout </button>
        </NavLink>
      </div>

      <div
        ref={menuNode}
        className={` ${
          isMenuOpen
            ? "  bg-black flex top-0 left-0 animate-openmenu h-full  z-50	  flex-col fixed   w-full md:w-[350px]"
            : "hidden"
        } `}
      >
        <div className=" flex flex-col  text-gray-100 text-center pt-10">
          <h2 className="font-bold text-2xl  "> About The Fit</h2>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="w-10 h-10  top-5 right-5 absolute items-center cursor-pointer"
            onClick={() => setIsMenuOpen(false)}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>

          <div className=" space-y-8   px-2 pt-8 pb-8 flex flex-col ">
            <h2 className="text-xl my-5 uppercase"> Dashboard</h2>

            <ul className="space-y-8  pt-8 pb-8 flex flex-col  ">
              <NavLink
                onClick={() => setIsMenuOpen((isMenuOpen) => !isMenuOpen)}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
                to="/dashboard"
                end
              >
                {" "}
                Dashboard
              </NavLink>
              <NavLink
                onClick={() => setIsMenuOpen((isMenuOpen) => !isMenuOpen)}
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
                to="products"
              >
                {" "}
                Products
              </NavLink>
              <NavLink
                onClick={() => setIsMenuOpen((isMenuOpen) => !isMenuOpen)}
                to="categories"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                Categories
              </NavLink>
              <NavLink
                onClick={() => setIsMenuOpen((isMenuOpen) => !isMenuOpen)}
                to="addproduct"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                {" "}
                Add Products
              </NavLink>
              <NavLink
                onClick={() => setIsMenuOpen((isMenuOpen) => !isMenuOpen)}
                to="addcategory"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                {" "}
                Add Category
              </NavLink>
              <NavLink
                onClick={() => setIsMenuOpen((isMenuOpen) => !isMenuOpen)}
                to="subscibers"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                {" "}
                Subscribers
              </NavLink>
              <NavLink
                onClick={() => setIsMenuOpen((isMenuOpen) => !isMenuOpen)}
                to="messages"
                className={({ isActive }) =>
                  isActive ? activeLink : normalLink
                }
              >
                {" "}
                Messages
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavDash;
