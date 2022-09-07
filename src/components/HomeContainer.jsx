import React from "react";
import { RiPlantFill } from "react-icons/ri";

import { heroData } from "../utils/data";
import heroimage from "../img/Frame 1.png";
const HomeContainer = () => {
  return (
    <section id="home" className="grid grid-cols-1 md:grid-cols-2 gap-2 w-full">
      <div className="flex-1 flex flex-col items-start justify-center gap-5 ">
        <div className="flex items-center justify-center gap-2 bg-green-100 px-3 py-1 rounded-full">
          <p className="text-base text-green-500 font-semibold ">
            100,000+ Plants Shipped
          </p>
          <div className="w-7 h-7 bg-white rounded-full overflow-hidden drop-shadow-xl flex items-center justify-center">
            {/* <img src="" alt="" /> */}
            <RiPlantFill className="text-base text-green-600" />
          </div>
        </div>
        <p className="text-[2.5rem] lg:text-[4.5rem] font-bold text-headingColor tracking-wide">
          We love helping you safe the {"    "}
          <span className="text-green-600 text-[3rem] lg:text-[5rem]">
            Earth
          </span>
        </p>
        <p className="text-base text-textColor text-center md:text-left md:w-[80%]">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatem
          incidunt omnis sint beatae sit illo quisquam aut cumque magnam
          consequatur dolorum itaque facere quos quaerat
        </p>

        <button
          type="button"
          className="bg-gradient-to-br from-green-400 to-green-600  px-4 py-2 rounded-lg
      transition-all ease-in-out duration-100 w-full md:w-auto hover:shadow-lg"
        >
          Explore Plants
        </button>
      </div>

      <div className="py-2 flex-1 flex items-center relative">
        <img
          src={heroimage}
          alt="hero-bg"
          className="ml-auto h:420 lg:h-650 lg:w-auto "
        />

        <div className="w-full h-full absolute items-center justify-center bg-blue flex top-0 left-0 py-6 px-1 lg:px-28 gap-10 flex-wrap">
          {heroData &&
            heroData.map((n) => (
              <div
                key={n.id}
                className="lg:w-190 w-36 p-4 rounded-3xl bg-cardOverlay backdrop-blur-md flex flex-col items-center justify-center drop-shadow-lg "
              >
                <div className="w-20 lg:w-40 -mt-10 lg:-mt-20 lg:h-36 h-20">
                  <img
                    src={n.imageSrc}
                    alt=""
                    className="w-full h-full object-contain"
                  />
                </div>
                <p className="text-sm lg:text-xl font-semibold text-textColor lg:mt-3 mt-2 text-center">
                  {n.name}
                </p>
                <p className="text-[10px] lg:text-sm text-lighttextGray font-semibold lg:my-2 my-1">
                  {n.decp}
                </p>
                <p className="text-sm font-semibold text-headingColor">
                  <span className="text-sm text-red-600">₹</span> {n.prize}
                </p>
              </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default HomeContainer;
