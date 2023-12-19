import { NavLink } from "react-router-dom";

const OurProducts = () => {
  return (
    <div className=" flex-col md:mx-16 lg:mx-32 mx-2  ">
      <h2 className="text-7xl text-black text-center font-bold my-10">
        Check Our Product
      </h2>

      <div className="  md:flex ">
        <div className=" relative w-[490px] mr-2 ">
          <NavLink
            to="/shop"
            className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-70 duration-300"
          >
            <p className="mx-auto text-xl">Description</p>
          </NavLink>
          <div className="relative">
            <div className="h-full flex flex-wrap text-center">
              <img
                className="object-cover mt-2 pr-5 "
                alt=""
                src="model4.jpg"
              />
            </div>
          </div>
        </div>

        <div className=" relative w-[490px] mr-2 ">
          <NavLink
            to="/shop"
            className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-70 duration-300"
          >
            <p className="mx-auto text-xl">Description</p>
          </NavLink>
          <div className="relative">
            <div className="h-full flex-wrap text-center">
              <img
                className="object-cover mt-2 pr-5 "
                alt=""
                src="model4.jpg"
              />
            </div>
          </div>
        </div>

        <div className=" relative w-[490px] mr-2 ">
          <NavLink
            to="/shop"
            className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-70 duration-300"
          >
            <p className="mx-auto text-xl">Description</p>
          </NavLink>
          <div className="relative">
            <div className="h-full flex   flex-wrap text-center">
              <img
                className="object-cover mt-2 pr-5 "
                alt=""
                src="model4.jpg"
              />
            </div>
          </div>
        </div>

        <div className=" relative w-[490px] mr-2 ">
          <NavLink
            to="/shop"
            className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-70 duration-300"
          >
            <p className="mx-auto text-xl">Description</p>
          </NavLink>
          <div className="relative">
            <div className="h-full flex   flex-wrap text-center">
              <img
                className="object-cover mt-2 pr-5 "
                alt=""
                src="model4.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
