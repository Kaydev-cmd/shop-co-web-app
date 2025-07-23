import React from "react";
import { ProductCardProps } from "@/interfaces";
import { FaStar } from "react-icons/fa";

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  alt,
  itemName,
  price,
}) => {
  return (
    <div className="card flex flex-col gap-2">
      <img src={image} alt={alt} className="rounded-2xl" />
      <h3 className="font-bold text-xl">{itemName}</h3>
      <div className="flex items-center gap-2">
        <FaStar color="#FFC633" size={20} />
        <FaStar color="#FFC633" size={20} />
        <FaStar color="#FFC633" size={20} />
        <FaStar color="#FFC633" size={20} />
        <FaStar color="#FFC633" size={20} />
        <p className="font-bold">
          {" "}
          <span>4.5</span>/5
        </p>
      </div>
      <p className="text-2xl font-bold">{price}</p>
    </div>
  );
};

export default ProductCard;
