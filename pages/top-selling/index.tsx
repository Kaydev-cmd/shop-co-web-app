import React from "react";
import { TOP_SELLING } from "@/constants";
import Link from "next/link";
import ProductCard from "@/components/common/ProductCard";
import Button from "@/components/common/Button";
import Subscribe from "@/components/common/Subscribe";

const TopSellingPage = () => {
  return (
    <>
      <section>
        <div className="container flex flex-col gap-4">
          <h3 className="font-extrabold text-4xl text-center">Top Selling</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {TOP_SELLING.map((product) => (
              <Link href={`/product/${product.id}`} key={product.id}>
                <ProductCard
                  key={product.itemName}
                  image={product.image}
                  alt={product.alt}
                  itemName={product.itemName}
                  rating={product.rating}
                  price={product.price}
                />
              </Link>
            ))}
          </div>
          <Button title="View More" />
        </div>
      </section>

      <section className="container">
        <Subscribe />
      </section>
    </>
  );
};

export default TopSellingPage;
