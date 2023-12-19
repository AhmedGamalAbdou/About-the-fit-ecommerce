import React, { useEffect } from "react";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getCategories } from "../redux/slices/categorySlice";
import { Loading } from "./Loading";

const SideBarFilter = () => {
  const dispatch = useDispatch();
  const { categories, loading } = useSelector((state) => state.categories);
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return loading ? (
    <Loading />
  ) : (
    <div className=" md:flex md:mx-16 lg:mx-24 w-full  hidden mt-10 ">
      <ul className="space-y-8    px-2 pt-8 pb-8 flex flex-col  ">
        <p className="text-center uppercase text-xl"> Categories </p>

        <NavLink to="/shop" className="text-center text-lg capitalize  ">
          {" "}
          all
        </NavLink>
        {categories &&
          categories.map((category) => (
            <NavLink
              to={`category/${category._id}`}
              key={category._id}
              className="text-center text-lg capitalize  "
            >
              {category.name}
            </NavLink>
          ))}
      </ul>
    </div>
  );
};

export default SideBarFilter;
