import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteFromCart } from "../redux/slices/cartSlice";

const Bag = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const totalPrice = cart.reduce((acc, product) => {
    acc += product.price * product.qty;
    return acc;
  }, 0);

  return (
    <div className="right-0 top-[45px] h-full fixed bg-slate-700  animate-opencart text-white  md:w-[650px] sm:w-[200px] z-[20]">
      <p className="pl-5 pt-[50px] text-teal-300 "> ORDER SUMMARY</p>
      {cart.map((product) => (
        <div className=" flex flex-row justify-between px-5 pt-5 pb-5">
          <div className="flex items-center">
            <div className="text-sm">
              <img className="w-[100px] h-[100px] " alt="Avatar" />
              <p className="text-gray-600">{product.title}</p>
            </div>
          </div>

          <div className="flex items-center ">
            <div className="text-sm">
              <div>
                <p className=" text-teal-300"> Quantity</p>
              </div>
              <p className="text-teal-300 pt-10 text-center">
                {product.qty}
              </p>
            </div>
          </div>

          <div className="flex items-center  ">
            <div className="text-sm ">
              <p className="text-gray-900 leading-none">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6 cursor-pointer"
                  onClick={() => dispatch(deleteFromCart(product))}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M9.75 9.75l4.5 4.5m0-4.5l-4.5 4.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
              </p>
              <p className="text-teal-300 pt-10">{product.price} $</p>
            </div>
          </div>
        </div>
      ))}

      <div className=" flex flex-row justify-between px-5 border-b-2 border-t-2">
        <div className="flex items-center pt-5 ">
          <div className="text-sm">
            <p className="text-teal-300">GRAND TOTAL :</p>
          </div>
        </div>
        <div className="">
          <p className="pl-5 pt-5 text-teal-300">{totalPrice} $</p>
        </div>
      </div>
    </div>
  );
};

export default Bag;
