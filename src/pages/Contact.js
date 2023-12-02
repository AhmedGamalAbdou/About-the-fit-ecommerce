import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createMessage } from "../redux/slices/messageSlice";

const Contact = () => {
  const email = useRef(null);
  const phoneNumber = useRef("");
  const message = useRef("");
  const name = useRef(null);

  const { loading } = useSelector((state) => state.messages);
  const dispatch = useDispatch();

  useEffect(() => {}, [dispatch, loading]);

  function onSubmit(e) {
    e.preventDefault();
    dispatch(
      createMessage({
        email: email.current ? email.current.value : null,
        name: name.current ? name.current.value : null,
        message: message.current.value,
        phoneNumber: phoneNumber.current.value,
      })
    );
  }
  return (
    <>
      <div className="container m-auto py-4 h-[600px] bg-gray-100">
        <div className="flex flex-col justify-center text-center items-center">
          <h2 className=" text-center  text-4xl text-black mt-5 font-bold ">
            {" "}
          </h2>
          <form onSubmit={onSubmit}>
            <div className="flex flex-col">
              <input
                className="md:w-[650px] xs:w-[650px] px-5  py-2 text-teal-800 border-1 mt-5 border border-solid border-gray-300"
                placeholder="Enter your name"
                ref={name}
              />
              <input
                className="md:w-[650px] xs:w-[650px] px-5  py-2 text-teal-800 border-1 mt-5 border border-solid border-gray-300"
                placeholder="Enter your email address"
                type="email"
                ref={email}
              />

              <input
                className="md:w-[650px] xs:w-[650px] px-5  py-2 text-teal-800 border-1 mt-5 border border-solid border-gray-300"
                placeholder="Enter your phone number"
                required
                type="tel"
                ref={phoneNumber}
              />

              <textarea
                className="
        form-control
        block
        w-full
        px-3
        py-3
        text-base
        font-normal
        text-gray-700
        bg-white bg-clip-padding
        border border-solid border-gray-300
        rounded
        transition
        ease-in-out
        m-0
        focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none
        mt-5
      "
                id="exampleFormControlTextarea1"
                rows="3"
                placeholder="Your message"
                ref={message}
                required
              ></textarea>
            </div>
            <button className=" py-2 text-sm font-bold text-white uppercase bg-black rounded-sm px-8 mt-2"></button>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
