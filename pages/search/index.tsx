import React from "react";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { PRODUCT_INFO } from "@/constants";
import ProductCard from "@/components/common/ProductCard";
import Subscribe from "@/components/common/Subscribe";

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
      <section className="container">
        <h1> Search Results for "{query}"</h1>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1">
            {filteredProducts.map((product) => (
              <Link href={`/product/${product.id}`} key={product.id}>
                <ProductCard
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

      <section className="container">
        <Subscribe />
      </section>
    </>
  );
};

export default SearchPage;
