import React, { useState, useEffect } from "react";
import Link from "next/link";
import { BsBagCheckFill } from "react-icons/bs";

import { useStateContext } from "../context/StateContext";
import { runConfetti } from "../lib/utils";

const Sucsess = () => {
  const { setCartItems, setTotalPrice, setTotalQuantity } = useStateContext();
  useEffect(() => {
    localStorage.clear();
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantity(0);
    runConfetti();
  }, []);

  return (
    <div className="success-wrapper">
      <div className="success">
        <p className="icon">
          <BsBagCheckFill />
        </p>
        <h2>Thanks For Placing Order!</h2>
        <p className="email-msg">Check your email inbox for the reciept.</p>
        <p className="description">
          If you have any query related to purchase, feel free to send email for
          support{" "}
          <a className="email" href="abhi1322jii@gmail.com">
            abhi1322jii@gmail.com
          </a>
          <Link href="/">
            <button type="button" width="300px" className="btn">
              Continue Shopping
            </button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Sucsess;
