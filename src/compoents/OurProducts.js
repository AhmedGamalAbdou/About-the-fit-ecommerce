import { NavLink } from "react-router-dom";

const OurProducts = () => {
  return (
    <div className=" flex-col md:mx-16 lg:mx-32 mx-10   ">
      <h2 className="text-7xl text-black text-center font-bold my-10">
        Check Our Product
      </h2>

      <div className="  md:flex ">
        <div className=" relative  mr-2 mb-3">
          <NavLink
            to="shop/category/65812fdd089beffb283ece82"
            className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-70 duration-300"
          >
            <p className="mx-auto text-xl">T-shirts</p>
          </NavLink>
          <div className="relative">
            <div className="h-full flex flex-wrap text-center">
              <img
                className="object-cover  w-[400px] h-[640px] "
                alt="tshirt"
                src="greytshirt.jpg"
              />
            </div>
          </div>
        </div>

        <div className=" relative mr-2 mb-3 ">
          <NavLink
            to="shop/category/658130a1089beffb283ece8e"
            className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-70 duration-300"
          >
            <p className="mx-auto text-xl">Sweatshirts & Hoodies</p>
          </NavLink>
          <div className="relative">
            <div className="h-full flex-wrap text-center">
              <img
                className="object-cover  w-[400px] h-[640px]"
                alt="blackSweetshirt"
                src="blackSweetshirt.jpg"
              />
            </div>
          </div>
        </div>

        <div className=" relative  mr-2 mb-3">
          <NavLink
            to="shop/category/65812fb0089beffb283ece7e"
            className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-70 duration-300"
          >
            <p className="mx-auto text-xl">Trousers</p>
          </NavLink>
          <div className="relative">
            <div className="h-full flex   flex-wrap text-center">
              <img
                className="object-cover w-[400px] h-[640px] "
                alt="blackTrouser"
                src="Trouser.jpg"
              />
            </div>
          </div>
        </div>

        <div className=" relative mr-2 mb-3 ">
          <NavLink
            to="shop/category/65813003089beffb283ece86"
            className="absolute inset-0 z-10 bg-white text-center flex flex-col items-center justify-center opacity-0 hover:opacity-100 bg-opacity-70 duration-300"
          >
            <p className="mx-auto text-xl">Coats & Jackets</p>
          </NavLink>
          <div className="relative">
            <div className="h-full flex   flex-wrap text-center">
              <img
                className="object-cover  w-[400px] h-[640px]"
                alt="blackJacket"
                src="blackJacket.jpg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurProducts;
