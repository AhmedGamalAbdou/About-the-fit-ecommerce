import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
// import ProductsList from "../../compoents/ProductsList";
import Shop from "./Shop";

const ShopCategory = () => {
  const { categoryid } = useParams();
  useEffect(() => {}, [categoryid]);
  return <Shop categoryid={categoryid} />;
};

export default ShopCategory;
