import React from "react";
import { NavLink } from "react-router-dom";

const NavDash = () => {
  return (
    <div className="w-full flex bg-blue-400 justify-between items-center py-2 px-6 text-zinc-50 ">
      <div className=" flex-none"></div>
      <div className="  flex items-center justify-center text-2xl font-bold">
        About The Fit
      </div>
      <div className="  flex items-center  justify-end">
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
        <NavLink to="/">
          <button> Logout </button>
        </NavLink>
      </div>
    </div>
  );
};

export default NavDash;
