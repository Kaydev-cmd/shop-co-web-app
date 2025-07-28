import React from "react";
import { PRODUCT_INFO } from "@/constants";
import ProductInfoCard from "../common/ProductInfoCard";

const ProductDetails = () => {
  return (
    <div className="container flex flex-col gap-3">
      {PRODUCT_INFO.map((product) => (
        <ProductInfoCard
          key={product.id}
          productName={product.productName}
          productRating={product.productRating}
          productPrice={product.productPrice}
          productDescription={product.productDescription}
        />
      ))}
    </div>
  );
};

export default ProductDetails;
