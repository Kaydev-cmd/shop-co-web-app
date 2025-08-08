import React from "react";
import { ProductCardProps } from "@/interfaces";
import Rating from "./Rating";
import Image from "next/image";

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  alt,
  itemName,
  price,
  rating,
}) => {
  return (
    <div className="card flex flex-col gap-3">
      <Image
        src={image}
        alt={alt}
        className="rounded-2xl"
        width={400}
        height={400}
        style={{ marginBottom: "8px" }}
      />
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
