import React from "react";
import OurProducts from "../compoents/OurProducts";
import HomeCarsouel from "../compoents/HomeCarsouel";
import Subscribe from "../compoents/Subscribe";
import TrendingNow from "../compoents/TrendingNow";

const Home = () => {
  return (
    <>
      <HomeCarsouel />
      <OurProducts />
      <TrendingNow />
      <Subscribe />
    </>
  );
};

export default Home;
