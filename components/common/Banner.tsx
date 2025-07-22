import React from "react";
import { IoClose } from "react-icons/io5";

const Banner = () => {
  return (
    <div className="bg-black text-white flex items-center" style={{ padding: "6px 12px" }}>
      <p className="container flex flex-col text-center">
        Sign up and get 20% off of your first order.{" "}
        <a href="#" className="underline">
          Sign Up Now
        </a>
      </p>
      <IoClose size={28}/>
    </div>
  );
};

export default Banner;
