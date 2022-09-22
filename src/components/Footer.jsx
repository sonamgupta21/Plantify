
import React from "react";
import { footerData } from "../utils/data";

const Footer = () => {
  return (
    <section className="w-full pt-12 ml-4 mr-4 mb-12" id="aboutUs">
      <div className="flex flex-col gap-10 md:flex-row">
        {footerData &&
          footerData.map((data) => (
            <div className="h-20 w-full bg-white flex  p-4 rounded-lg items-center gap-4" key={data.id}>
              <div className="w-10 h-10 max-w-[60px] rounded-full object-contain">
                <img src={data.img} alt="" />
              </div>
              <div className="flex flex-col gap-2">
                <p className="text-base text-textColor">{data.header}</p>
                <p className="text-sm block text-headingColor font-semibold">
                  {data.desc}
                </p>
              </div>
            </div>
          ))}
      </div>
    </section>
  );
};

export default Footer;
