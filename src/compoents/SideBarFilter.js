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
    <div className="col-span-2 border-r border-gray-200 min-h-[90vh] w-[120px] lg:w-[250px] flex flex-col items-start justify-between pt-8 px-1">
      <ul className="space-y-8 w-full font-bold  border-t-2 border-b-2 px-4 pt-8 pb-8 flex flex-col ">
        <NavLink to="/shop"> all</NavLink>
        {categories &&
          categories.map((category) => (
            <NavLink to={`category/${category._id}`} key={category._id}>
              {category.name}
            </NavLink>
          ))}
      </ul>
    </div>
  );
};

export default SideBarFilter;
