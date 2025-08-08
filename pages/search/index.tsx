import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { PRODUCT_INFO } from "@/constants";
import { motion } from "framer-motion";
import Subscribe from "@/components/common/Subscribe";
import ProductSearchCard from "@/components/common/ProductSearchCard";

const SearchPage = () => {
  const searchParams = useSearchParams();
  const query = searchParams.get("query")?.toLowerCase() || "";

  const filteredProducts = PRODUCT_INFO.filter((product) => {
    return (
      product.productName.toLowerCase().includes(query) ||
      product.productDescription.toLowerCase().includes(query)
    );
  });

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <section className="container">
          <h1> Search Results for &quot;{query}&quot;</h1>

          {filteredProducts.length > 0 ? (
            <div className="grid grid-cols-1">
              {filteredProducts.map((product) => (
                <Link href={`/product/${product.id}`} key={product.id}>
                  <ProductSearchCard
                    key={product.id}
                    id={product.id}
                    image={product.productImage}
                    alt={product.productName}
                    itemName={product.productName}
                    price={product.productPrice}
                    rating={product.productRating}
                    description={product.productDescription}
                  />
                </Link>
              ))}
            </div>
          ) : (
            <p>No products found matching your search.</p>
          )}
        </section>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <section className="container">
          <Subscribe />
        </section>
      </motion.div>
    </>
  );
};

export default SearchPage;
