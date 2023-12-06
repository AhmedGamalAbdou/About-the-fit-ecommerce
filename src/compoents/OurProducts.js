import { Link, NavLink } from "react-router-dom";

const OurProducts = () => {
  return (
    <div className=" mx-8 font-medium md:mx-32 mt-5">
      <h2 className="text-7xl text-black text-center font-bold my-10">
        Check Our Product
      </h2>

      <div className="flex   ">
        <div className="relative w-[600px] mr-2 ">
          <NavLink
            to="/shop"
            className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-70 duration-300"
          >
            <p className="mx-auto text-4xl">Description</p>
          </NavLink>
          <div className="relative">
            <div className="h-full flex flex-wrap text-center">
              <img src="model4.jpg" className="w-full object-cover " alt="" />
            </div>
          </div>
        </div>

        <div className="relative w-[600px]  ">
          <NavLink
            to="/shop"
            className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-70 duration-300"
          >
            <p className="mx-auto text-4xl">Description</p>
          </NavLink>
          <div className="relative">
            <div className="h-full flex flex-wrap text-center">
              <img src="model4.jpg" className="w-full object-cover " alt="" />
            </div>
          </div>
        </div>

        <div className="relative w-[600px] mx-2 ">
          <NavLink
            to="/shop"
            className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-70 duration-300"
          >
            <p className="mx-auto font-bold text-4xl">Description</p>
          </NavLink>
          <div className="relative">
            <div className="h-full flex flex-wrap text-center">
              <img src="model4.jpg" className="w-full object-cover " alt="" />
            </div>
          </div>
        </div>

        <div className="relative w-[600px] mr-1  ">
          <NavLink
            to="/shop"
            className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-70 duration-300"
          >
            <p className="mx-auto font-bold text-4xl">Description</p>
          </NavLink>
          <div className="relative">
            <div className="h-full flex flex-wrap text-center">
              <img src="model4.jpg" className="w-full object-cover " alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
