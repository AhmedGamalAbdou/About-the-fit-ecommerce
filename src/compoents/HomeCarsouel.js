import React from "react";
import { NavLink } from "react-router-dom";
const HomeCarsouel = () => {
  return (
    <section className=" mx-2 mb-8   pt-24 font-medium md:mx-32 ">
      <div className=" flex justify-between items-center flex-col 2xl:flex-row ">
        <div className="text-center  2xl:text-left mx-5">
          <p className="text-4xl font-bold lg:text-8xl text-black whitespace-nowrap ">
            With About the fit <br />
            you will never <br />
            go out of style
          </p>
          <p className="mt-10 text-lg ">
            {" "}
            "Fashion you can buy, but style you possess. The key to style is
            learning who you are”
          </p>
          <NavLink to="/shop">
            <button className="text-lg md:text-2xl bg-black text-white py-2 px-5 mt-5 hover:bg-zinc-800">
              Shop now{" "}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-6 h-6 inline"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75"
                />
              </svg>
            </button>
          </NavLink>
        </div>
        <div className=" flex  flex-col mt-5   ">
          <img className="object-cover" alt="" src="model1.jpg" />
          <img className="object-cover mt-5 pl-5" alt="" src="model2.jpg" />
          <img className="object-cover mt-5 pr-5" alt="" src="model3.jpg" />
        </div>
      </div>
    </section>
  );
};

export default HomeCarsouel;
