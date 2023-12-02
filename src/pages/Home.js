import React from "react";
import CheckOurProducts from "../compoents/CheckOurProducts";
import HomeCarsouel from "../compoents/HomeCarsouel";
import Subscribe from "../compoents/Subscribe";
import TrendingNow from "../compoents/TrendingNow";

const Home = () => {
  return (
    <>
      <HomeCarsouel />
      <CheckOurProducts />
      <TrendingNow />
      <Subscribe />
    </>
  );
};

export default Home;
