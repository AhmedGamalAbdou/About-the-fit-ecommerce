import React from "react";
import Header from "../compoents/Header";
import { Outlet } from "react-router-dom";
import Footer from "../compoents/Footer";

const Layout = () => {
  return (
    <div className="flex flex-col h-screen justify-between">
      <Header />
      <main className="bg-gray-100">
        <Outlet />
      </main>
      <Footer/>
    </div>
  );
};
export default Layout;
