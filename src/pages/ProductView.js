import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import EmblaCarousel from "../compoents/carsouel/EmblaCarousel";
import { Loading } from "../compoents/Loading";
import { addToCart } from "../redux/slices/cartSlice";
import { getProductById } from "../redux/slices/productSlice";
const ProductView = () => {
  const { productid } = useParams();
  const [qty, setQty] = useState(1);
  const SLIDE_COUNT = 3;
  const slides = Array.from(Array(SLIDE_COUNT).keys());
  const { productInfo, isLoading } = useSelector((state) => state.products);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getProductById(productid));
  }, [dispatch, productid]);
  return isLoading ? (
    <Loading />
  ) : (
    <div className="flex pt-10 pb-10 container mx-auto space-x-4 ">
      <div className="relative flex flex-col ">
        <div className="flex items-start space-x-2">
          <div>
            {productInfo && <EmblaCarousel images={productInfo.images} />}{" "}
          </div>
        </div>
      </div>

      <div className="flex ">
        {productInfo && (
          <div className="">
            <div className="flex items-center text-sm pt-10">
              <span className="text-gray-900/40">
                {productInfo.catalog.name}/
              </span>
              <span>{productInfo.name} </span>
            </div>

            <div className="pt-10">
              <h2 className="text-4xl font-bold tracking-wide">
                {" "}
                {productInfo.name}
              </h2>
            </div>
            <div className="pt-4 flex items-center justify-between">
              <span className="text-3xl font-bold tracking-wide">
                {" "}
                {productInfo.price} EGP
              </span>
            </div>
            <div className="mt-2">
              <p>Sizes : M - L - XL</p>
            </div>
            <div className="mt-2">
              <p> Color : {productInfo.color}</p>
            </div>
            <p className="pt-8 leading-relaxed">
              {" "}
              loose-fitting pants of soft, absorbent fabric, as cotton jersey,
              usually with a drawstring at the waist and close-fitting or
              elastic cuffs at the ankles, commonly worn during athletic
              activity for warmth or to induce sweating.{" "}
            </p>

            <div className="flex space-x-6 pt-9">
              <div className="flex items-center border rounded-sm border-gray-900/30">
                <button
                  className="p-4"
                  onClick={() => {
                    if (qty > 1) {
                      setQty(qty - 1);
                    }
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M19.5 12h-15"
                    />
                  </svg>
                </button>
                <input
                  v-model="count"
                  type="text"
                  className="w-16 h-full text-center outline-none bg-zinc-50"
                  value={qty}
                />
                <button
                  className="p-4"
                  onClick={() => {
                    setQty(qty + 1);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth="1.5"
                    stroke="currentColor"
                    className="w-6 h-6"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M12 4.5v15m7.5-7.5h-15"
                    />
                  </svg>
                </button>
              </div>
              <button
                className=" text-sm font-bold text-white uppercase bg-black rounded-sm px-4"
                onClick={() => {
                  dispatch(addToCart({ ...productInfo, qty }));
                }}
              >
                Add to cart
              </button>
              <Link to="/cart">
                <button className="py-6 text-sm font-bold text-white uppercase bg-black rounded-sm px-8">
                  Your Cart
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default ProductView;
