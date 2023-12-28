import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import {
  deleteFromCart,
  incrementQuantity,
  decrementQuantity,
} from "../redux/slices/cartSlice";
import { LazyLoadImage } from "react-lazy-load-image-component";

const Cart = () => {
  const dispatch = useDispatch();
  const { cartItems } = useSelector((state) => state.cart);
  const totalPrice = cartItems.reduce((acc, product) => {
    acc += product.price * product.quantity;
    return acc;
  }, 0);

  return (
    <>
      <h2 className="text-5xl text-black  text-center capitalize mt-10 mb-5">
        {" "}
        your shopping cart{" "}
      </h2>
      <div className="mx-2 mb-8   pt-20 font-medium md:mx-32  px-8 flex-col ">
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
                  <div className="cartItem__incrDec">
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
        <div className=" flex justify-between mx-5">
          <div className="my-5">
            <p className="text-lg">
              {" "}
              Your Total Price Is :{" "}
              <span className=" font-bold"> {totalPrice} EGP</span>{" "}
            </p>
          </div>
          <div>
            <Link to="/checkout">
              <button className="py-2 my-5 text-sm font-bold text-white uppercase bg-black rounded-sm px-8 ">
                Checkout
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default Cart;
