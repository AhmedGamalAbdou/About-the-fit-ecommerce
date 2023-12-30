import React, { useEffect, useState } from "react";
import Header from "../compoents/Header";
import Footer from "../compoents/Footer";
import { NavLink } from "react-router-dom";
import { getProducts } from "../redux/slices/productSlice";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { LazyLoadImage } from "react-lazy-load-image-component";
const Search = () => {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  let { products } = useSelector((state) => state.products);
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return (
    <>
      <Header />
      <div className="flex flex-col justify-center text-center items-center">
        <div className="flex-col md:mx-16 lg:mx-32 mx-10 pt-10 w-1/2 ">
          <div className=" md:block ">
            <input
              onChange={(e) => setSearch(e.target.value)}
              id="search"
              type="text"
              className=" bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full  p-2.5 "
              required
              placeholder="Search"
            />

            <div>
              {" "}
              {products &&
                products
                  .filter((product) => {
                    return search.toLowerCase() === ""
                      ? ""
                      : product.name.toLowerCase().includes(search);
                  })
                  .map((product) => (
                    <Link to={`/ProductView/${product._id}`}>
                      <LazyLoadImage
                        className=" rounded-t-md  flex w-[300px] h-[300px] mx-2 my-5 object-cover"
                        alt={product.name}
                        src={product.images[0]}
                        delayTime="500"
                      />
                    </Link>
                  ))}
            </div>
          </div>
          <div className="mt-4  hidden sm:block  ">
            <h1 className="text-xl uppercase mb-2 font-bold">
              {" "}
              recommended for you{" "}
            </h1>
            <div className="flex justify-center ">
              <div className="mx-5">
                <NavLink to="/shop/category/65812fb0089beffb283ece7e">
                  <img
                    className="w-24 h-24 rounded-full shadow-lg"
                    src="Trouser.jpg"
                    alt="Trouser"
                  />{" "}
                </NavLink>
              </div>

              <div className="  mx-5 ">
                <NavLink to="/shop/category/65812fdd089beffb283ece82">
                  <img
                    className="w-24 h-24 rounded-full shadow-lg object-cover"
                    alt="tshirt"
                    src="greytshirt.jpg"
                  />{" "}
                </NavLink>
              </div>
              <div className="   mx-5 ">
                <NavLink to="/shop/category/658130a1089beffb283ece8e">
                  <img
                    className="w-24 h-24  rounded-full shadow-lg object-cover"
                    alt="blackSweetshirt"
                    src="blackSweetshirt.jpg"
                  />{" "}
                </NavLink>
              </div>

              <div className="  mx-5">
                <NavLink to="/shop/category/65813003089beffb283ece86">
                  <img
                    className="w-24 h-24 rounded-full shadow-lg "
                    alt="blackJacket"
                    src="blackJacket.jpg"
                  />
                </NavLink>
              </div>
            </div>
          </div>
        </div>

        <div className="w-1/2 mt-2 ">
          <img
            className="shadow-lg  w-full object-cover "
            alt="blackJacket"
            src="store.avif"
          />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Search;
