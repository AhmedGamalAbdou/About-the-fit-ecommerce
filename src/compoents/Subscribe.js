import React, { useEffect, useRef } from "react";
import { createSubscriber } from "../redux/slices/subscriberSlice";
import { useDispatch, useSelector } from "react-redux";
import { useTranslation } from "react-i18next";

const Subscribe = () => {
  const { t } = useTranslation();

  const email = useRef("");
  const { loading } = useSelector((state) => state.subscribers);
  const dispatch = useDispatch();

  useEffect(() => {}, [dispatch, loading]);

  function onSubmit(e) {
    e.preventDefault();

    if (email !== "") {
      dispatch(createSubscriber(email.current.value));
    }
  }
  return (
    <div className="md:flex justify-between mt-5 container bg-black mx-auto h-[300px] w-[1400px] mb-10 hidden text-zinc-50 ">
      <div className="w-[300px] h-[300px]">
        <img src="../sub.jpg" alt="model" />
      </div>
      <div className="flex flex-col justify-center items-center">
        <h2 className="text-2xl mb-3 "> {t("Subscribe")}</h2>
        <p className="mb-5 text-xs">{t("Subscribepara")}</p>
        <div className="md:flex">
          <form onSubmit={onSubmit}>
            <button className=" text-black bg-[#fff] hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-teal-300 dark:focus:ring-teal-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2 ">
              {t("Subscribe")}
            </button>
            <input
              className="w-[400px] px-5  py-2 text-teal-800 ml-1"
              placeholder=" enter your email address"
              type="email"
              ref={email}
              required
            />
          </form>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Subscribe;
