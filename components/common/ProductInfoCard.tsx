import React from "react";
import { FaStar } from "react-icons/fa";
import { SIZES } from "@/constants";
import Pill from "./Pill";
import Counter from "./Counter";
import Button from "./Button";
import Reviews from "./Reviews";
import { ProductInfoCardProps } from "@/interfaces";

const ProductInfoCard: React.FC<ProductInfoCardProps> = ({
  productName,
  productRating,
  productPrice,
  productDescription,
}) => {
  return (
    <>
      {/* Gallery */}
      <div>
        <img
          src="/assets/images/product_details/one_life.png"
          alt="One Life Graphic Tee"
        />
      </div>
      <div className="flex justify-around rounded-md">
        <img
          src="/assets/images/product_details/one_life_rear.png"
          alt="One Life Graphic Tee"
          className="w-26 h-26"
        />
        <img
          src="/assets/images/product_details/one_life_rear.png"
          alt="One Life Graphic Tee Rear"
          className="w-26 h-26"
        />
        <img
          src="/assets/images/product_details/one_life_2.png"
          alt="One Life Graphic Tee"
          className="w-26 h-26"
        />
      </div>

      {/* ProductInfo */}
      <div className="flex flex-col gap-3">
        <h1 className="font-extrabold text-2xl uppercase">{productName}</h1>
        <div className="flex items-center gap-2">
          <div className="flex items-center gap-2">
            <FaStar color="#FFC633" size={20} />
            <FaStar color="#FFC633" size={20} />
            <FaStar color="#FFC633" size={20} />
            <FaStar color="#FFC633" size={20} />
            <FaStar color="#FFC633" size={20} />
          </div>
          <p className="font-bold text-md">
            {" "}
            <span>{productRating}</span>/5
          </p>
        </div>
        <p className="text-2xl font-bold">{productPrice}</p>
        <p className="text-[#666666] text-lg" style={{ marginBottom: "12px" }}>
          {productDescription}
        </p>

        <div className="container">
          <div className="border border-gray-300"></div>
        </div>

        {/* Select Colors */}
        <div style={{ padding: "6px 0", margin: "6px" }}>
          <h2
            className="text-sm text-[#666666]"
            style={{ marginBottom: "12px" }}
          >
            Select Colors
          </h2>
          <div className="flex gap-3">
            <div
              className="rounded-full bg-[#4F4631]"
              style={{ padding: "16px" }}
            ></div>
            <div
              className="rounded-full bg-[#314F4A]"
              style={{ padding: "16px" }}
            ></div>
            <div
              className="rounded-full bg-[#31344F]"
              style={{ padding: "16px" }}
            ></div>
          </div>
        </div>

        <div className="container">
          <div className="border border-gray-300"></div>
        </div>

        {/* Select Size */}
        <div style={{ padding: "6px 0", margin: "6px" }}>
          <h2
            className="text-sm text-[#666666]"
            style={{ marginBottom: "12px" }}
          >
            Select Size
          </h2>
          <div className="flex justify-around">
            {SIZES.map((size) => (
              <Pill key={size.size} title={size.size} />
            ))}
          </div>
        </div>

        {/* Count and Add To Cart */}
        <div
          className="flex items-center justify-around"
          style={{ marginTop: "12px" }}
        >
          <Counter />
          <Button title="Add to Cart" />
        </div>

        {/* Add Reviews */}
        <section>
          <Reviews />
          <div className="flex justify-center" style={{ marginTop: "26px" }}>
            <Button title="Load More Reviews" />
          </div>
        </section>
      </div>
    </>
  );
};

export default ProductInfoCard;
