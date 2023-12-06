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
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-12 h-8">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 9h16.5m-16.5 6.75h16.5" />
               </svg>

                </button>
               
              </div>

              <div className="">
              <NavLink  to="/" className="pl-3">Home</NavLink>
              <NavLink to="/shop" className="pl-3">Products</NavLink>
              <NavLink to="/about" className="pl-3">About </NavLink>
              <NavLink to="/contact" className="pl-3">Contact</NavLink>

              </div>


              <div className="flex ">
                
  
    <div class="mx-auto max-w-md">


<form action="" className="relative  w-max ">
  <input type="search" 
        className="peer cursor-pointer relative z-10 h-6 w-6 bg-transparent pl-8 outline-none focus:w-full focus:cursor-text focus:border-white focus:pl-16 focus:pr-4 " />
  <svg  mlns="http://www.w3.org/2000/svg" className="absolute inset-y-0 my-auto h-8 w-12  border-transparent stroke-white px-3.5 peer-focus:border-white peer-focus:stroke-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
    <path  stroke-linecap="round" stroke-linejoin="round" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
    
  </svg>
</form>


</div>


                <NavLink
                  className="hover:text-white mx-4 text-xs  cursor-pointer font-bold m-0"
                  to="/cart"
                  title="shopping cart"
                >
                  <span> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
</svg>
</span>
                </NavLink>

                <NavLink
                  to="/login"
                  className=" hover:text-white  text-xs cursor-pointer font-bold "
                  title="login"
                  
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="hover:fill-cyan-700 w-6 h-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
</svg>

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
