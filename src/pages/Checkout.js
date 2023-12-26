import { React, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { Loading } from "../compoents/Loading";
import { deleteFromCart } from "../redux/slices/cartSlice";
import { createorders } from "../redux/slices/ordersSlice";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Checkout = () => {
  const dispatch = useDispatch();
  const { orderItems } = useSelector((state) => state.cart);
  const { loading } = useSelector((state) => state.orders);
  const totalPrice = orderItems.reduce((acc, product) => {
    acc += product.price * product.qty;
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
        orderItems,
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
      <div className="h-full grid grid-cols-1 xl:grid-cols-5 col-span-10 w-full">
        <div className="  col-span-2 w-full items-start justify-start flex flex-col px-12 pt-12 pb-6  ">
          <h2 className="mt-5 text-2xl "> Enter Your Shipping info</h2>
          <form onSubmit={onSubmit}>
            <h2 className="mt-2 text-md">Contact information</h2>

            <div className="mt-4 flex space-x-4">
              <input
                type="text"
                id="name"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-full p-2.5  dark:border-gray-600 dark:focus:border-black  "
                required
                placeholder="Your Name "
                ref={name}
              />
            </div>
            <div className="mt-4 flex space-x-4">
              <input
                type="text"
                id="phonenumber"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-2/4 p-2.5  dark:border-gray-600 dark:focus:border-black  "
                required
                placeholder=" mobile phone number"
                ref={phoneNumber}
              />

              <input
                type="text"
                id="Email"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-2/4 p-2.5  dark:border-gray-600 dark:focus:border-black  "
                required
                placeholder="Email "
                ref={email}
              />
            </div>

            <div className="mt-4 flex space-x-4">
              <input
                type="text"
                id="Address"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-2/4 p-2.5  dark:border-gray-600 dark:focus:border-black  "
                required
                placeholder="Address "
                ref={address}
              />

              <input
                type="text"
                id="City"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-2/4 p-2.5  dark:border-gray-600 dark:focus:border-black  "
                required
                placeholder="City "
                ref={city}
              />
            </div>

            <div className="mt-4 flex space-x-4">
              <input
                type="text"
                id="postalCode"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-2/4 p-2.5  dark:border-gray-600 dark:focus:border-black  "
                required
                placeholder="postalCode "
                ref={postalCode}
              />

              <input
                type="text"
                id="governorate"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-black focus:border-black block w-2/4 p-2.5  dark:border-gray-600 dark:focus:border-black  "
                required
                placeholder="governorate "
                ref={governorate}
              />
            </div>

            <div className="flex justify-between mx-5 mt-5">
              <div className="flex">
                <Link to="/cart">
                  {" "}
                  <button className="py-2 text-sm font-bold text-white uppercase bg-black rounded-sm px-8">
                    Return To Cart
                  </button>
                </Link>
              </div>

              <div className="flex">
                <button
                  className="py-2 text-sm font-bold text-white uppercase bg-black rounded-sm px-8"
                  type="submit"
                >
                  Place Order
                </button>
              </div>
            </div>
          </form>
        </div>

        <div className="hidden md:col-span-3 md:items-start md:justify-start md:flex md:flex-col md:w-full md:pt-12 md:pb-6">
          <div className="container m-auto  h-[90vh] bg-gray-100 px-8 py-8 flex-col">
            <h2 className="text-2xl text-teal-800 font-bold"> My order list</h2>
            <table className="w-full border-separate border-spacing-2 border border-slate-500 mt-2">
              <thead className="bg-gray-100 border-b-2 border-gray-200  text-left ">
                <tr>
                  <th>product</th>
                  <th> Product name</th>
                  <th>QUANTITY</th>
                  <th>Price</th>
                </tr>
              </thead>
              <tbody>
                {orderItems.map((product) => (
                  <tr
                    key={product.code}
                    className="p-3 text-sm text-black border-b-2 border-gray-200   "
                  >
                    <td>
                      <Link to={`/ProductView/${product._id}`}>
                        <LazyLoadImage
                          className=" rounded-t-md w-20 h-20 object-contain	 "
                          alt={product.name}
                          src={product.images[0]}
                          delayTime="500"
                        />
                      </Link>
                    </td>
                    <td>{product.name} </td>
                    <td> {product.qty}</td>
                    <td>
                      <button
                        onClick={() => dispatch(deleteFromCart(product.id))}
                      >
                        remove
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className=" flex justify-between mx-5">
              <div>
                <p> your total price is : {totalPrice} EGP</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Checkout;
