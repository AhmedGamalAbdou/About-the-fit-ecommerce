import React, { useEffect } from "react";
import Moment from "moment";
import { getSubscribers } from "../../redux/slices/subscriberSlice";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "../../compoents/Loading";
const DashSubscribers = () => {
  let { subscribers, loading } = useSelector((state) => state.subscribers);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getSubscribers());
  }, [dispatch]);
  return loading ? (
    <Loading />
  ) : (
    <div className="flex-col ">
      <h2 className=" px-8 py-8 text-2xl text-blue-400 font-bold">
        {" "}
        Your Subscribers
      </h2>
      <div className=" ">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th className="px-6 py-3">id</th>
              <th className="px-6 py-3">email</th>
              <th className="px-6 py-3">Subscription Date</th>
            </tr>
          </thead>
          <tbody>
            {subscribers &&
              subscribers.map((subscriber) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={subscriber._id}
                >
                  <td className="px-6 py-3">{subscriber._id}</td>
                  <td className="px-6 py-3">{subscriber.email}</td>
                  <td className="px-6 py-3">
                    {Moment(subscriber.createdAt).format("DD-MM-YYYY")}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashSubscribers;
