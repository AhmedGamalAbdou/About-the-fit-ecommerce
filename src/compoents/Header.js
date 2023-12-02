import React, { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ClickOutsideFucn } from "../compoents/ClickOutside";
import { getCategories } from "../redux/slices/categorySlice";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { orderItems } = useSelector((state) => state.cart);
  const { categories } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  let menuNode = ClickOutsideFucn(() => {
    setIsMenuOpen(false);
  });

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return (
    <header className="z-[30] ">
      <div className="bg-black  text-zinc-50 hover:text-zinc-200 ">
        <nav className=" container  mx-auto">
          <div className="w-full  drop-shadow-md   ">
            <div className="flex justify-between h-12 place-items-center">
              <div className="flex flex-row  ">
                <button
                  onClick={() => setIsMenuOpen((isMenuOpen) => !isMenuOpen)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    className="w-6 h-6 cursor-pointer bg-color-zinc-50 fill-zinc-50 stroke-zinc-100	transition-all			"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
                    />
                  </svg>
                </button>
                <NavLink
                  to="/shop"
                  className=" hover:text-white mx-4 text-xs my-1 cursor-pointer font-bold "
                >
                  {" "}
                  shop
                </NavLink>
              </div>

              <div className="  font-bold	text-2xl  hover:text-white ">
                <NavLink to="/">About The Fit</NavLink>
              </div>

              <div>
                <NavLink
                  className="hover:text-white mx-4 text-xs my-1 cursor-pointer font-bold m-0"
                  to="/cart"
                >
                  <span> ({orderItems.length})</span>
                </NavLink>

                <NavLink
                  to="/dashboard"
                  className=" hover:text-white mx-4 text-xs my-1 cursor-pointer font-bold "
                >
                  Dashboard
                </NavLink>
              </div>
            </div>
          </div>
        </nav>
      </div>

      <div
        ref={menuNode}
        className={` ${
          isMenuOpen
            ? "  bg-black flex top-0 animate-openmenu h-full   flex-col fixed   w-full md:w-[350px]"
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
          <div className=" flex flex-col">
            <NavLink
              to="/"
              className=" hover:text-white  text-lg   cursor-pointer hover:underline "
            ></NavLink>

            <NavLink
              to="/contact"
              className=" hover:text-white  my-1 cursor-pointer hover:underline text-lg  "
            ></NavLink>

            <NavLink
              to="/privacy-policy"
              className=" hover:text-white  text-lg  my-1 cursor-pointer hover:underline "
            ></NavLink>

            <NavLink
              to="/refund-policy"
              className=" hover:text-white  text-lg  my-1 cursor-pointer hover:underline "
            ></NavLink>
          </div>
          <div className=" flex flex-col">
            <h2 className="font-bold text-2xl "> COLLECTIONS</h2>

            {categories &&
              categories.map((category) => (
                <NavLink
                  to={`/shop/category/${category._id}`}
                  className=" hover:text-white text-lg  my-1 cursor-pointer hover:underline "
                  key={category._id}
                >
                  {category.name}
                </NavLink>
              ))}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
