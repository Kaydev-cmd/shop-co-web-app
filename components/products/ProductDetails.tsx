import React from "react";
import ProductInfoCard from "../common/ProductInfoCard";
import { ProductInfoCardProps } from "@/interfaces";
import { motion } from "framer-motion";

interface ProductDetailsProps {
  product: ProductInfoCardProps;
}

const ProductDetails: React.FC<ProductDetailsProps> = ({ product }) => {
  if (!product) return null;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      transition={{ duration: 0.8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
    >
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
    </motion.div>
  );
};

export default ProductDetails;
