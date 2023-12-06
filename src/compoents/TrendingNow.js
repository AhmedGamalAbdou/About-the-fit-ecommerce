import React from "react";
import { NavLink } from "react-router-dom";

const TrendingNow = () => {
  return (
    <div className="mx-8 font-medium md:mx-32 mt-10 ">
      <h2 className="text-7xl text-black text-center font-bold my-10">
        You May Also Like
      </h2>

      <div className="flex flex-row justify-between">
        <div className="flex flex-col mx-5">
          <h1 className="text-4xl "> Favourits </h1>
          <p className="text-lg">
            {" "}
            "we have made a selection of our customers Favourite products"
          </p>
          <NavLink to="/shop">
            <span className="text-xl underline capitalize"> see all</span>{" "}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-6 h-6 inline"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </NavLink>
        </div>
        <div>
          <img className="object-cover mt-2 pr-5 " alt="" src="model4.jpg" />
        </div>
        <div>
          <img className="object-cover mt-2 pr-5" alt="" src="model4.jpg" />
        </div>
        <div>
          <img className="object-cover mt-2 pr-5" alt="" src="model4.jpg" />
        </div>
      </div>
    </div>
  );
};

export default TrendingNow;
