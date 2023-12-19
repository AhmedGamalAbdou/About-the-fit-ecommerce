import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Loading } from "../../compoents/Loading";
import {
  getCategories,
  deleteCategory,
} from "../../redux/slices/categorySlice";
const DashCategories = () => {
  let { categories, loading } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);
  return loading ? (
    <Loading />
  ) : (
    <div className="flex-col ">
      <h2 className="text-2xl px-8 py-8  text-blue-400 font-bold">
        {" "}
        Categories{" "}
      </h2>
      <div className=" ">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 ">
            <tr>
              <th className="px-6 py-3">ID</th>
              <th className="px-6 py-3">Name</th>
              <th className="px-6 py-3">Code</th>
              <th className="px-6 py-3">delete</th>
            </tr>
          </thead>
          <tbody>
            {categories &&
              categories.map((category) => (
                <tr
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                  key={category._id}
                >
                  <td className="px-6 py-3">{category._id}</td>
                  <td className="px-6 py-3">{category.name}</td>
                  <td className="px-6 py-3">{category.code}</td>
                  <td className="px-6 py-3">
                    <button
                      onClick={() => dispatch(deleteCategory(category._id))}
                      className="text-red-600"
                    >
                      remove
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DashCategories;
