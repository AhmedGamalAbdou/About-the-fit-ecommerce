import React, { useEffect } from "react";
import { useState } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { ClickOutsideFucn } from "../compoents/ClickOutside";
import { getCategories } from "../redux/slices/categorySlice";
import { logout } from "../redux/slices/authSlice";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { categories } = useSelector((state) => state.categories);
  const { cartItems } = useSelector((state) => state.cart);
  const totalquntity = cartItems.reduce((acc, product) => {
    acc += product.quantity;
    return acc;
  }, 0);
  const dispatch = useDispatch();
  let menuNode = ClickOutsideFucn(() => {
    setIsMenuOpen(false);
  });
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);

  const handleLogout = () => {
    dispatch(logout());
  };

  return (
    <header className="z-[30] ">
      <div className="bg-black  text-zinc-50 hover:text-zinc-200  ">
        <nav className="   mx-8 font-medium md:mx-32 ">
          <div className="w-full  drop-shadow-md   ">
            <div className="flex justify-between h-16 place-items-center">
              <div className="flex  ">
                <div className="  font-bold	text-xl  hover:text-white px-3">
                  <NavLink to="/">About The Fit</NavLink>
                </div>

                <button
                  onClick={() => setIsMenuOpen((isMenuOpen) => !isMenuOpen)}
                >
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

              <div className="md:flex hidden">
                <NavLink to="/" className="pl-3">
                  Home
                </NavLink>
                <NavLink to="/shop" className="pl-3">
                  Shop
                </NavLink>
                <NavLink to="/about" className="pl-3">
                  About{" "}
                </NavLink>
                <NavLink to="/contact" className="pl-3">
                  Contact
                </NavLink>
              </div>

              <div className="flex ">
                <NavLink
                  to="/search"
                  className="hover:text-white text-xs  cursor-pointer font-bold m-0 relative"
                >
                  <svg
                    mlns="http://www.w3.org/2000/svg"
                    className="w-6 h-6 "
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                    />
                  </svg>
                </NavLink>

                <NavLink
                  className="hover:text-white mx-4 text-xs  cursor-pointer font-bold m-0 relative"
                  to="/cart"
                  title="shopping cart"
                >
                  <span>
                    {" "}
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="w-6 h-6 "
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z"
                      />
                    </svg>
                    <span className="absolute right-[-10px] top-[-10px] rounded-full bg-red-600 w-5 h-5 top right p-0 m-0 text-white font-mono text-sm  leading-tight text-center">
                      {totalquntity}
                    </span>
                  </span>
                </NavLink>

                <div>
                  {isLoggedIn ? (
                    <div>
                      <button onClick={handleLogout}>Logout</button>
                    </div>
                  ) : (
                    <NavLink to="/login">Login</NavLink>
                  )}
                </div>
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

          <div className=" space-y-8   px-2 pt-8 pb-8 flex flex-col ">
            <h2 className="text-xl my-5 uppercase"> Categories</h2>

            <NavLink
              to="/shop"
              className="hover:text-white text-lg  my-1 cursor-pointer hover:underline capitalize "
            >
              all
            </NavLink>

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
