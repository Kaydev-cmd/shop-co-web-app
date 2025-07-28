import React from "react";
import { ImEqualizer2 } from "react-icons/im";
import { TOP_SELLING } from "@/constants";
import ProductCard from "./ProductCard";
import { CategoryProps } from "@/interfaces";

const Category: React.FC<CategoryProps> = ({ categoryName }) => {
  return (
    <div>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-2">
          <h1 className="font-bold text-xl">{categoryName}</h1>
          <p className="text-[#666666]">Showing 1-10 of 100 Products</p>
        </div>
        <div className="bg-gray-200 rounded-full" style={{ padding: "12px" }}>
          <ImEqualizer2 />
        </div>
      </div>

      <div className="grid grid-cols-2">
        {TOP_SELLING.map((product) => (
          <ProductCard
            key={product.itemName}
            image={product.image}
            alt={product.alt}
            itemName={product.itemName}
            rating={product.rating}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Category;
