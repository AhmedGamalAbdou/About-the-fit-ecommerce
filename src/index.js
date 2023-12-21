import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./pages/Layout";
import LayoutDash from "./pages/LayoutDash";
import ErrorPage from "./pages/ErrorPage";
import { Provider } from "react-redux";
import store from "./redux/store";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import RefundPolicy from "./pages/RefundPolicy";
import LayoutShop from "./pages/LayoutShop";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Dashboard from "./pages/Dashboard/Dashboard";
import DashProducts from "./pages/Dashboard/DashProducts";
import DashSubscribers from "./pages/Dashboard/DashSubscribers";
import Msgs from "./pages/Dashboard/Msgs";
import AddProduct from "./pages/Dashboard/AddProduct";

import Cart from "./pages/Cart";
import ProductView from "./pages/ProductView";
import Checkout from "./pages/Checkout";

import Shop from "./pages/Shop/Shop";
import DashCategories from "./pages/Dashboard/DashCategories";
import AddCategory from "./pages/Dashboard/AddCategory";
import ShopCategory from "./pages/Shop/ShopCategory";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import About from "./pages/About";
import Register from "./pages/Login/Register";
import Login from "./pages/Login/Login";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Home /> },
      { path: "privacy-policy", element: <PrivacyPolicy /> },
      { path: "refund-policy", element: <RefundPolicy /> },
      { path: "contact", element: <Contact /> },
      { path: "cart", element: <Cart /> },
      { path: "ProductView/:productid", element: <ProductView /> },
      { path: "checkout", element: <Checkout /> },
      { path: "about", element: <About /> },
      { path: "register", element: <Register /> },
      { path: "login", element: <Login /> },
    ],
  },

  {
    path: "/shop",
    element: <LayoutShop />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Shop /> },
      { path: "category/:categoryid", element: <ShopCategory /> },
    ],
  },

  {
    path: "/dashboard",
    element: <LayoutDash />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <Dashboard /> },
      { path: "products", element: <DashProducts /> },
      { path: "categories", element: <DashCategories /> },
      { path: "subscibers", element: <DashSubscribers /> },
      { path: "messages", element: <Msgs /> },
      { path: "addproduct", element: <AddProduct /> },
      { path: "addcategory", element: <AddCategory /> },
      // { path: 'products/edit/:productid', element: <DashEditpage /> },
    ],
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
      {/* Same as */}
      <ToastContainer />
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
