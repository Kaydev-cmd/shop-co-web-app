import React from "react";
import Counter from "./Counter";
import Button from "./Button";
import Reviews from "./Reviews";
import { ProductInfoCardProps } from "@/interfaces";
import Rating from "./Rating";
import PillGroup from "./PillGroup";

const ProductInfoCard: React.FC<ProductInfoCardProps> = ({
  productName,
  productImage,
  productRating,
  productPrice,
  productDescription,
}) => {
  return (
    <>
      {/* Gallery */}
      <img src={productImage} alt={productName} />

      {/* ProductInfo */}
      <div className="flex flex-col gap-3">
        <h1 className="font-extrabold text-2xl uppercase">{productName}</h1>
        <div className="flex items-center gap-2">
          <Rating />
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
          <PillGroup />
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
