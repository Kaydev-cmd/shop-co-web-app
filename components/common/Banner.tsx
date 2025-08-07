import React from "react";
import { IoClose } from "react-icons/io5";
import { motion } from "framer-motion";

const Banner = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
      <div
        className="bg-black text-white flex items-center"
        style={{ padding: "6px 12px" }}
      >
        <p className="container flex flex-col text-center">
          Sign up and get 20% off of your first order.{" "}
          <a href="#" className="underline">
            Sign Up Now
          </a>
        </p>
        <IoClose size={28} />
      </div>
    </motion.div>
  );
};

export default Banner;
