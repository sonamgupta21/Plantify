import { motion } from "framer-motion";
import React, { useEffect} from "react";
import { useState } from "react";
import { MdShoppingCart } from "react-icons/md";
import { actionType } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";

import { FaStar } from "react-icons/fa";

const CardContainer = ({ flag, item }) => {
  const [items, setItems] = useState([]);

  const [{ cartItems }, dispatch] = useStateValue();

  const addtocart = (item) => {
    localStorage.setItem("cartItems", JSON.stringify(items));
    dispatch({
      type: actionType.SET_CART_ITEMS,
      cartItems: items,
    });
  };

  useEffect(() => {
    addtocart();
  }, [items]);

  return (
    <div
      key={item?.id}
      className={`w-275 min-w-[275px] md:w-300 md:min-w-[300px]  bg-cardOverlay rounded-lg lg:my-12 my-8 backdrop-blur-lg hover:drop-shadow-lg py-2 px-4 flex flex-col items-center justify-evenly relative gap-3
             ${flag ? "h-[300px]" : "h-[200px]"}
      
              `}
    >
      <div className="w-full flex items-center justify-between">
        <motion.div
          whileHover={{ scale: 1.2 }}
          className="w-40 h-40 -mt-14 -ml-4 drop-shadow-2xl"
        >
          <img
            src={item?.imageURL}
            alt=""
            className="h-full w-full object-contain"
          />
        </motion.div>
        <motion.div
          whileTap={{ scale: 0.75 }}
          className="w-8 h-8 rounded-full bg-green-600 flex items-center justify-center cursor-pointer hover:shadow-md"
          onClick={() => setItems([...cartItems, item])}
        >
          <MdShoppingCart className="text-white" />
        </motion.div>
      </div>
      <div
        className="w-full flex flex-col items-end justify-end -mt-4 gap-2
              "
      >
        <p className="text-textColor font-semibold text-base md:text-lg">
          {item?.title}
        </p>
        {flag && (
          <div className=" flex items-end flex-col justify-center">
            <p className="text-sm text-green-500 mb-1 capitalize">
              {item.category}
            </p>
            <p className="text-[.8rem] text-gray-500 text-right">
              {item?.description}
            </p>
          </div>
        )}
        <div className="w-full flex items-center gap-8 justify-between">
          <p className="mt-1 text-sm text-gray-500 flex items-center justify-center gap-1">
            {item?.rating} <FaStar className="text-sm text-yellow-400" />
          </p>
          <p className="text-xl text-headingColor font-semibold ">
            <span className="text-lg text-green-500">₹ </span>
            {item?.price}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardContainer;
