import React from "react";
import { TOP_SELLING } from "@/constants";
import Link from "next/link";
import ProductCard from "@/components/common/ProductCard";
import Button from "@/components/common/Button";

const TopSellingPage = () => {
  return (
    <section>
      <div className="container flex flex-col gap-4">
        <h3 className="font-extrabold text-4xl text-center">Top Selling</h3>
        <div>
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
  );
};

export default TopSellingPage;
