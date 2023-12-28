import { React, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Loading } from "../compoents/Loading";
import { createorders } from "../redux/slices/ordersSlice";
import { LazyLoadImage } from "react-lazy-load-image-component";
import {
  deleteFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../redux/slices/cartSlice";
const Checkout = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const { loading } = useSelector((state) => state.orders);
  const totalPrice = cartItems.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);

  /// orders
  useEffect(() => {}, [dispatch]);

  const email = useRef(null);
  const phoneNumber = useRef("");
  const address = useRef("");
  const name = useRef(null);
  const city = useRef(null);
  const governorate = useRef(null);
  const postalCode = useRef(null);

  function onSubmit(e) {
    e.preventDefault();
    dispatch(
      createorders({
        cartItems,
        shippingPrice: 0,
        totalPrice: totalPrice,
        user: {
          email: email.current ? email.current.value : null,
          name: name.current ? name.current.value : null,
          phoneNumber: phoneNumber.current.value,
          shippingAddress: {
            address: address.current ? address.current.value : null,
            city: city.current ? city.current.value : null,
            governorate: governorate.current ? governorate.current.value : null,
            postalCode: postalCode.current ? postalCode.current.value : null,
          },
        },
      })
    );
  }

  return loading ? (
    <Loading />
  ) : (
    <>
      <div></div>
      <div className="flex mx-2 mb-8 pt-10 font-medium md:mx-32  px-8 text-center md:text-left  ">
        <div className="">
          <h2 className="mt-5 text-2xl "> Enter Your Shipping info</h2>
          <form onSubmit={onSubmit}>
            <h2 className="mt-2 text-md">Contact information</h2>

            <input
              type="text"
              id="name"
              className="md:w-[650px] xs:w-[650px] px-5  py-2 border-1 mt-5 border border-solid border-gray-300"
              required
              placeholder="Your Name "
              ref={name}
            />
            <input
              type="text"
              id="phonenumber"
              className="md:w-[650px] xs:w-[650px] px-5  py-2 border-1 mt-5 border border-solid border-gray-300"
              required
              placeholder=" mobile phone number"
              ref={phoneNumber}
            />

            <input
              type="text"
              id="Email"
              className="md:w-[650px] xs:w-[650px] px-5  py-2 border-1 mt-5 border border-solid border-gray-300"
              required
              placeholder="Email "
              ref={email}
            />

            <input
              type="text"
              id="Address"
              className="md:w-[650px] xs:w-[650px] px-5  py-2 border-1 mt-5 border border-solid border-gray-300"
              required
              placeholder="Address "
              ref={address}
            />

            <input
              type="text"
              id="City"
              className="md:w-[650px] xs:w-[650px] px-5  py-2 border-1 mt-5 border border-solid border-gray-300"
              required
              placeholder="City "
              ref={city}
            />

            <input
              type="text"
              id="postalCode"
              className="md:w-[650px] xs:w-[650px] px-5  py-2 border-1 mt-5 border border-solid border-gray-300"
              required
              placeholder="postalCode "
              ref={postalCode}
            />

            <input
              type="text"
              id="governorate"
              className="md:w-[650px] xs:w-[650px] px-5  py-2 border-1 mt-5 border border-solid border-gray-300"
              required
              placeholder="governorate "
              ref={governorate}
            />
            <p className="text-lg mt-2">
              {" "}
              Your Total Price Is :
              <span className="text-2xl font-bold">{totalPrice}</span>
            </p>

            <div className="flex justify-center sm:justify-start mt-5">
              <button
                className="py-2 text-sm font-bold text-white uppercase bg-black rounded-sm px-8 ml-2  "
                type="submit"
              >
                Place Order
              </button>
            </div>

            <div className="flex justify-center sm:justify-start mt-5">
              <Link to="/cart">
                {" "}
                <button className="py-2 text-sm font-bold text-white uppercase bg-black rounded-sm px-8 ml-2  ">
                  back to cart
                </button>
              </Link>
            </div>
          </form>
        </div>

        <div className=" hidden sm:block">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 ">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 text-center  ">
              <tr>
                <th className="px-3 py-3 text-left">product</th>
                <th className="px-6 py-3"> Product name</th>
                <th className="px-6 py-3">Quantity</th>
                <th className="px-6 py-3">per piece price</th>
                <th className="px-6 py-3">Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((product) => (
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
                  <td className="px-6 py-3">
                    {" "}
                    <div className="">
                      <button
                        onClick={() => dispatch(decrementQuantity(product._id))}
                      >
                        -
                      </button>
                      <p>{product.quantity}</p>
                      <button
                        onClick={() => dispatch(incrementQuantity(product._id))}
                      >
                        +
                      </button>
                    </div>
                  </td>
                  <td className="px-6 py-3">{product.price}</td>
                  <td>
                    {" "}
                    <button
                      onClick={() => dispatch(deleteFromCart(product._id))}
                      className="text-red-600"
                    >
                      remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Checkout;
