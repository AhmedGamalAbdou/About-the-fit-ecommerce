import React, { useEffect, useState } from "react";
import Moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { getorders } from "../../redux/slices/ordersSlice";
import { Loading } from "../../compoents/Loading";

const Dashboard = () => {
  const [search, setSearch] = useState("");

  let { orders, loading, orderDetails } = useSelector((state) => state.orders);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getorders(orderDetails));
  }, [dispatch, orderDetails]);
  return loading ? (
    <Loading />
  ) : (
    <div className="px-8 py-8 flex-col ">
      <h2 className="text-2xl text-blue-400 font-bold mb-2"> All Orders</h2>

      <div className="my-2">
        <input
          onChange={(e) => setSearch(e.target.value)}
          placeholder="search for the order by order id"
          className="w-5/6 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        />
      </div>
      <div className=" ">
        <div className="relative overflow-x-auto">
          <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  customer name
                </th>
                <th scope="col" className="px-6 py-3">
                  order id
                </th>
                <th scope="col" className="px-6 py-3">
                  order
                </th>

                <th scope="col" className="px-6 py-3">
                  price
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Phone
                </th>
                <th scope="col" className="px-6 py-3">
                  Date
                </th>
              </tr>
            </thead>
            <tbody>
              {orders &&
                orders
                  .filter((order) => {
                    return search.toLowerCase() === ""
                      ? order
                      : order._id.toLowerCase().includes(search);
                  })
                  .map((order) => (
                    <tr
                      className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 "
                      key={order._id}
                    >
                      <th className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                        {order.user.name ? order.user.name : "No Name"}
                      </th>
                      <td
                        className={
                          search.toLowerCase() === "" ? "" : "text-blue-400"
                        }
                      >
                        {" "}
                        {order._id}
                      </td>
                      <td className="px-6 py-3">
                        {" "}
                        {order.orderItems.map((item) => item.name)}
                      </td>
                      <td className="px-6 py-3"> {order.totalPrice}</td>

                      <td>
                        {order.user.email ? order.user.email : "No Email"}
                      </td>
                      <td>{order.user.phoneNumber}</td>
                      <td>{Moment(order.createdAt).format("DD-MM-YYYY")}</td>
                    </tr>
                  ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
