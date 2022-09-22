import { motion } from "framer-motion";
import React, { useState, useEffect } from "react";
import { MdChevronLeft, MdChevronRight } from "react-icons/md";
import {
  RowContainer,
  CartContainer,
  Footer,
  HomeContainer,
  MenuContainer,
} from ".";
import { useStateValue } from "../context/StateProvider";

const MainContainer = () => {
  const [{ plantItems, cartShow }, dispatch] = useStateValue();
  const [scrollValue, setScrollValue] = useState(0);

  useEffect(() => {}, [scrollValue, cartShow]);

  return (
    <div className="flex flex-col items-center justify-center w-full h-auto">
      <HomeContainer />
      <section className="w-full my-6">
        <div className="w-full flex items-center justify-between">
          <p className="text-2xl font-semibold capitalize text-headingColor relative before:absolute before:rounded-lg before:w-32 before:content-start before:h-1 before:-bottom-2 before: left-0 before:bg-gradient-to-tr from-green-400 to-green-600 ">
            Customer Favourites
          </p>
          <div className="hidden md:flex gap-3 items-center">
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-green-300 hover:bg-green-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue(scrollValue - 200)}
            >
              <MdChevronLeft className="text-lg text-white " />
            </motion.div>
            <motion.div
              whileTap={{ scale: 0.75 }}
              className="w-8 h-8 rounded-lg bg-green-300 hover:bg-green-500 cursor-pointer transition-all duration-100 ease-in-out hover:shadow-lg flex items-center justify-center"
              onClick={() => setScrollValue(scrollValue + 200)}
            >
              <MdChevronRight className="text-lg text-white " />
            </motion.div>
          </div>
        </div>
        <RowContainer
          flag={true}
          data={plantItems?.filter((item) => item.rating > 4)}
          scrollValue={scrollValue}
        />
      </section>
      <MenuContainer />
      <Footer />
      {cartShow && <CartContainer />}
    </div>
  );
};

export default MainContainer;
