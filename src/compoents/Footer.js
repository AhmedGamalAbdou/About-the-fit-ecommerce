import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();

  return (
    <footer className="text-center bg-black  text-zinc-200 hover:text-zinc-50 ">
      <div className="container px-6 pt-6">
        <div className="grid lg:grid-cols-4 md:grid-cols-2">
          <div className="mb-6">
            <h5 className="uppercase font-bold mb-2.5">About The Fit</h5>
          </div>

          <div className="mb-6">
            <h5 className="uppercase font-bold mb-2.5">Navigate</h5>

            <ul className="list-none mb-0 flex flex-col">
              <NavLink className="text-white" to="/shop">
                {t("navbarshop")}
              </NavLink>
              <NavLink className="text-white" to="/contact">
                {t("navbarmenucontact")}
              </NavLink>
            </ul>
          </div>

          <div className="mb-6">
            <h5 className="uppercase font-bold mb-2.5">Assistance</h5>

            <ul className="list-none mb-0">
              <li>
                <a href="/refund-policy" className="text-white">
                  {t("navbarmenurefund")}
                </a>
              </li>
              <li>
                <a href="/privacy-policy" className="text-white">
                  {t("navbarmenuprivcy")}
                </a>
              </li>
            </ul>
          </div>

          <div className="mb-6">
            <h5 className="uppercase font-bold mb-2.5">Follow us</h5>

            <ul className="list-none mb-0">
              <li>
                <a
                  href="https://www.instagram.com/aboutthefit.17/"
                  className="text-white"
                  rel="noreferrer"
                  target="_blank"
                >
                  {t("instagram")}
                </a>
              </li>
              <li>
                <a
                  href="https://www.facebook.com/diversicollection"
                  className="text-white"
                  rel="noreferrer"
                  target="_blank"
                >
                  {t("facebook")}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="text-center p-4"> {t("copyright")}</div>
    </footer>
  );
};

export default Footer;
