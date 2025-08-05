import React, { useState } from "react";
import { MdOutlineMail } from "react-icons/md";

const Subscribe = () => {
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isSuccess, setIsSuccess] = useState(false);

  const validateEmail = (email: string) => {
    const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return pattern.test(email);
  };

  const handleSubscribe = () => {
    if (validateEmail(email)) {
      setMessage("Thank you for subscribing!");
      setIsSuccess(true);
      setEmail("");
    } else {
      setMessage("Please enter a valid email address.");
      setIsSuccess(false);
    }
  };

  return (
    <div
      className="bg-black text-white rounded-2xl flex flex-col gap-6"
      style={{ padding: "24px" }}
    >
      <h3 className="text-4xl font-bold">
        Stay Up To Date About Our Latest Offers
      </h3>
      <div className="flex items-center relative">
        <MdOutlineMail
          style={{ position: "absolute", right: 10 }}
          color="#9CA3AF"
          size={30}
        />
        <input
          type="text"
          placeholder="Enter your email address"
          className="w-full"
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <button
        className="bg-white"
        style={{ color: "#000" }}
        onClick={handleSubscribe}
      >
        Subscribe to Newsletter
      </button>

      {message && (
        <p
          className={`text-sm text-center ${
            isSuccess ? "text-green-400" : "text-red-400"
          }`}
        >
          {message}
        </p>
      )}
    </div>
  );
};

export default Subscribe;
