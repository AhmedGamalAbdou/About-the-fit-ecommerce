import React, { useEffect } from "react";
import Moment from "moment";
import { useDispatch, useSelector } from "react-redux";
import { getMessages } from "../../redux/slices/messageSlice";
import { Loading } from "../../compoents/Loading";

const Msgs = () => {
  let { messages, loading } = useSelector((state) => state.messages);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getMessages());
  }, [dispatch]);
  return loading ? (
    <Loading />
  ) : (
    <div className=" flex-col ">
      <h2 className=" px-8 py-8  text-2xl text-blue-400 font-bold">
        {" "}
        Your Messages
      </h2>
      <div className=" ">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
            <tr>
              <th className="px-6 py-3">Name </th>
              <th className="px-6 py-3">Email</th>
              <th className="px-6 py-3">Message</th>
              <th className="px-6 py-3">Phone</th>
              <th className="px-6 py-3">Date</th>
            </tr>
          </thead>
          <tbody>
            {messages &&
              messages.map((message) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={message._id}
                >
                  <td className="px-6 py-3">
                    {message.name ? message.name : "No Name"}
                  </td>
                  <td className="px-6 py-3">
                    {message.email ? message.email : "No Email"}
                  </td>
                  <td className="px-6 py-3">{message.message}</td>
                  <td className="px-6 py-3">{message.phoneNumber}</td>
                  <td className="px-6 py-3">
                    {Moment(message.createdAt).format("DD-MM-YYYY")}
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Msgs;
