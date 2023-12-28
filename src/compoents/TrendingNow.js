import React from "react";
import { NavLink, Link } from "react-router-dom";

const TrendingNow = () => {
  return (
    <div className="mx-8 font-medium md:mx-32 mt-10 ">
      <h2 className="text-7xl text-black text-center font-bold my-10">
        You May Also Like
      </h2>

      <div className="flex flex-col md:text-left text-center justify-between md:flex-row">
        <div className="">
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
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-6 h-6 inline"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
              />
            </svg>
          </NavLink>
        </div>
        <div>
          <div className=" bg-white shadow-md rounded-xl duration-500 hover:scale-90 hover:shadow-xl mx-2">
            <Link
              to="ProductView/65814bc336c9a63486d7d062"
              className=" rounded-t-md "
            >
              <img
                className="object-cover  w-[500px] h-[600px] "
                alt=""
                src="Coat.jpg"
              />
            </Link>

            <div className="px-4 py-3 ">
              <p className="text-lg font-bold text-black truncate block capitalize">
                Coat
              </p>
              <div className="flex items-center">
                <p className="text-lg font-semibold text-black cursor-auto my-3">
                  {" "}
                  2500 EGP
                </p>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className=" bg-white shadow-md rounded-xl duration-500 hover:scale-90 hover:shadow-xl mx-2">
              <Link
                to="ProductView/6581a7fd7f1323a620e00adc"
                className=" rounded-t-md "
              >
                <img
                  className="object-cover  w-[500px] h-[600px] "
                  alt="Trouser"
                  src="Sweatshirt.jpg"
                />
              </Link>

              <div className="px-4 py-3 ">
                <p className="text-lg font-bold text-black truncate block capitalize">
                  Sweatshirt
                </p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                    {" "}
                    1200 EGP
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div>
            <div className=" bg-white shadow-md rounded-xl duration-500 hover:scale-90 hover:shadow-xl mx-2">
              <Link
                to="ProductView/65814a8936c9a63486d7d028"
                className=" rounded-t-md "
              >
                <img
                  className="object-cover  w-[500px] h-[600px] "
                  alt=""
                  src="Trouser.jpg"
                />
              </Link>

              <div className="px-4 py-3 ">
                <p className="text-lg font-bold text-black truncate block capitalize">
                  Trouser
                </p>
                <div className="flex items-center">
                  <p className="text-lg font-semibold text-black cursor-auto my-3">
                    {" "}
                    1900 EGP
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TrendingNow;
