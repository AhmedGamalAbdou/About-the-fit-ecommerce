import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { deleteFromCart } from "../redux/slices/cartSlice";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Cart = () => {
  const dispatch = useDispatch();
  const { orderItems } = useSelector((state) => state.cart);
  const totalPrice = orderItems.reduce((acc, product) => {
    acc += product.price * product.qty;
    return acc;
  }, 0);

  return (
    <div className="container m-auto  h-full bg-gray-100 px-8 py-8 flex-col ">
      <h2 className="text-2xl text-black font-bold"> My Shopping Bag</h2>
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center  ">
          <tr>
            <th className="px-3 py-3 text-left">product</th>
            <th className="px-6 py-3"> Product name</th>
            <th className="px-6 py-3">QUANTITY</th>
            <th className="px-6 py-3">Price</th>
          </tr>
        </thead>
        <tbody>
          {orderItems.map((product) => (
            <tr
              key={product.code}
              className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 text-center   "
            >
              <td>
                <Link to={`/ProductView/${product._id}`}>
                  <LazyLoadImage
                    className=" rounded-t-md w-20 h-20 object-contain my-5 "
                    alt={product.name}
                    src={product.images[0]}
                    delayTime="500"
                  />
                </Link>
              </td>
              <td className="px-6 py-3">{product.name} </td>
              <td className="px-6 py-3"> {product.qty}</td>
              <td className="px-6 py-3">
                <button
                  onClick={() => dispatch(deleteFromCart(product.id))}
                  className="text-red-600"
                >
                  remove
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <div className=" flex justify-between mx-5">
        <div className="mt-2">
          <p className="text-lg">
            {" "}
            Your Total Price Is :{" "}
            <span className="text-blue-400 font-bold">
              {" "}
              {totalPrice} EGP
            </span>{" "}
          </p>
        </div>
        <div>
          <Link to="/checkout">
            <button className="py-2 text-sm font-bold text-white uppercase bg-black rounded-sm px-8 mt-2">
              Checkout
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Cart;
