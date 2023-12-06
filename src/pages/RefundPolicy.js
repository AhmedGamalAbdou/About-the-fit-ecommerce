import React from "react";

const RefundPolicy = () => {
  return (
    <div>
      <div className="container m-auto py-4 h-full">
        <div className="flex flex-col justify-between mt-10 mx-60">
          <div>
            <h2 className="text-2xl text-teal-800 font-bold border-b-2">
              {" "}
              Refund Policy
            </h2>
          </div>
          <div>
            <h2 className="text-lg mt-5 "> Returns Process</h2>
            <p>
              {" "}
              You have 7 days from the receipt of your order to return products.{" "}
            </p>
          </div>

          <div>
            <h2 className="text-lg mt-5 "> Pick-up </h2>
            <p>
              {" "}
              Up to 2 working days to arrange and pick up the items you would
              like to return.{" "}
            </p>
          </div>
          <div>
            <h2 className="text-lg mt-5 "> Process </h2>
            <p>
              {" "}
              Up to 2 working days to perform a quality check and issue the
              refund.{" "}
            </p>
          </div>

          <div>
            <h2 className="text-lg mt-5 "> Refund</h2>
            <p> You will get a refund in cash </p>
          </div>

          <div></div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default RefundPolicy;
