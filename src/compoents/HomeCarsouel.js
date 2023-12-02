import React from "react";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
const HomeCarsouel = () => {
  const { t } = useTranslation();

  return (
    <section className="px-3 py-5 bg-neutral-100 lg:py-10">
      <div className="grid lg:grid-cols-2 items-center justify-items-center gap-5">
        <div className="order-2 lg:order-1 flex flex-col justify-center items-center">
          <p className="text-4xl font-bold md:text-7xl text-orange-600">
            {t("discount")}
          </p>
          <p className="text-4xl font-bold md:text-7xl"> {t("discountpara")}</p>
          <p className="mt-2 text-sm md:text-lg"> {t("discountpara2")}</p>
          <NavLink to="/shop">
            <button className="text-lg md:text-2xl bg-black text-white py-2 px-5 mt-10 hover:bg-zinc-800">
              {t("carsoulbutton")}
            </button>
          </NavLink>
        </div>
        <div className="order-1 lg:order-2">
          <img
            className="h-80 w-80 object-cover lg:w-[500px] lg:h-[500px]"
            alt=""
            src="main1.jpg"
          />
        </div>
      </div>
    </section>
  );
};

export default HomeCarsouel;
