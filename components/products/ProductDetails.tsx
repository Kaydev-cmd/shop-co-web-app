import React from "react";
import ProductInfoCard from "../common/ProductInfoCard";
import { ProductInfoCardProps } from "@/interfaces";

interface ProductDetailsProps {
  product: ProductInfoCardProps;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  if (!product) return null;

  return (
    <div className="container flex flex-col gap-3">
      <ProductInfoCard
        key={product.productName}
        productImage={product.productImage}
        productName={product.productName}
        productRating={product.productRating}
        productPrice={product.productPrice}
        productDescription={product.productDescription}
      />
    </div>
  );
};

export default ProductDetails;
