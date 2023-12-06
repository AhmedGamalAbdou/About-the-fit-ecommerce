import React from "react";

const About = () => {
  return (
    <div className="text-2xl text-gray-500">
      {" "}
      <div>
        <div className=" mx-8 mb-8 flex flex-col pt-10 font-medium md:mx-16 lg:mx-96 text-[#000]">
          <p className="text-[64px] font-bold text-center "> About </p>

          <div className="flex justify-between mt-10 gap-4 flex-col md:flex-row">
            <div className=" w-1/2">
              <h2 className="text-[30px] border-b-2  border-black">
                {" "}
                Who We Are{" "}
              </h2>

              <div>
                <p className="text-[24px]  font-bold mt-4"> About the fit </p>
                <p>
                  {" "}
                  Established in cairo, egypt, in 1966, About the fit preserves
                  an authentic connection to its founding principles of Labor et
                  Ingenium, expressing craft and creativity.
                </p>
              </div>
            </div>
            <div className="w-1/2 flex justify-end">
              <img src="model4.jpg" className="object-cover " alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
