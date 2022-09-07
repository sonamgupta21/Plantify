import React, { useState } from "react";
import { categories } from "../utils/data";
import { motion } from "framer-motion";
import RowContainer from "./RowContainer";
import { useStateValue } from "../context/StateProvider";
const MenuContainer = () => {
  const [filter, setFilter] = useState("indoor");
  const [{ plantItems }, dispatch] = useStateValue();

  return (
    <section className="w-full mb-6" id="menu">
      <div className="w-full flex flex-col items-center justify-center">
        <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:w-32 before:content-start before:h-1 before:-bottom-2 before:left-0 before:bg-gradient-to-tr from-green-400 to-green-600 transition-all ease-in-out duration-100 mr-auto mb-4">
          What are you looking for?
        </p>

        <div className="w-full flex items-center justify-start lg:justify-center gap-8 py-6 overflow-x-scroll scrollbar-none">
          {categories &&
            categories.map((category) => (
              <motion.div
                whileTap={{ scale: 0.75 }}
                key={category.id}
                className={`group
                 ${
                   filter === category.urlParamName ? "bg-cartNumBg" : "bg-card"
                 }
                 w-auto min-w-[94px] h-10 p-4 cursor-pointer rounded-lg drop-shadow-md flex flex-col gap-3 items-center justify-center hover:bg-cartNumBg`}
                onClick={() => setFilter(category.urlParamName)}
              >
                <p
                  className={`text-sm  group-hover:text-white text-center
                  ${
                    filter === category.urlParamName
                      ? "text-white"
                      : "text-textColor"
                  }`}
                >
                  {category.name}
                </p>
              </motion.div>
            ))}
        </div>

        <div className="w=full">
          <RowContainer
            flag={false}
            data={plantItems?.filter((item) => item.category === filter)}
          />
        </div>
      </div>
    </section>
  );
};

export default MenuContainer;
