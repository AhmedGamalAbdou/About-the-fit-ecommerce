import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../redux/slices/productSlice";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { deleteProduct } from "../../redux/slices/productSlice";
import { Loading } from "../../compoents/Loading";

const DashProducts = () => {
  const { products, isLoading } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  return isLoading ? (
    <Loading />
  ) : (
    <div>
      <h2 className="text-2xl px-8 py-8  text-blue-400 font-bold">
        {" "}
        Store Products
      </h2>
      <div className=" ">
        <div className="flex flex-wrap mt-10 ">
          {products &&
            products.map((product) => (
              <div className="bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl mx-2">
                <LazyLoadImage
                  className=" rounded-t-md w-[400px] h-[640px] my-5"
                  alt={product.name}
                  src={product.images[0]} // use normal <img> attributes as props
                />

                <button
                  href="#"
                  className=" my-2 text-white bg-red-700 hover:bg-red-800 focus:ring-4 focus:outline-none focus:ring-red-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
                  onClick={() => dispatch(deleteProduct({ id: product._id }))}
                >
                  Delete
                </button>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default DashProducts;
