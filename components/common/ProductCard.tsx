import React from "react";
import { ProductCardProps } from "@/interfaces";
import Rating from "./Rating";

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  alt,
  itemName,
  price,
  rating,
}) => {
  return (
    <div className="card flex flex-col gap-3">
      <img src={image} alt={alt} className="rounded-2xl" />
      <h3 className="font-bold text-2xl">{itemName}</h3>
      <div className="flex items-center gap-2">
        <Rating />
        <p className="font-bold text-md">
          {" "}
          <span>{rating}</span>/5
        </p>
      </div>
      <p className="text-2xl font-bold">${price}</p>
    </div>
  );
};

export default ProductCard;
