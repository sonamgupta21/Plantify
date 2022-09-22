import React, { useEffect, useRef } from "react";
import { useState } from "react";
import { actionType } from "../context/reducer";
import { useStateValue } from "../context/StateProvider";
import NotFound from "../img/NotFound.svg";
import { CardContainer } from ".";

const RowContainer = ({ flag, data, scrollValue }) => {
  const rowContainer = useRef();

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
    rowContainer.current.scrollLeft += scrollValue;
  }, [scrollValue]);

  useEffect(() => {
    addtocart();
  }, [items]);
  return (
    <div
      ref={rowContainer}
      className={`w-full mt-12   flex items-center lg:gap-6 scroll-smooth ${
        flag
          ? "overflow-x-scroll scrollbar-none"
          : "overflow-x-hidden flex-wrap justify-center"
      }`}
    >
      {data && data.length > 0 ? (
        data.map((item) => <CardContainer item={item} flag={flag} />)
      ) : (
        <div className="w-full flex flex-col items-center justify-center">
          <img src={NotFound} alt="" className="h-340" />
          <p className="text-xl text-headingColor font-semibold">
            Item Not Available
          </p>
        </div>
      )}
    </div>
  );
};

export default RowContainer;
