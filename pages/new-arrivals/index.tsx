import React from "react";
import { NEW_ARRIVALS } from "@/constants";
import Link from "next/link";
import ProductCard from "@/components/common/ProductCard";
import Button from "@/components/common/Button";

const NewArrivalsPage = () => {
  return (
    <section>
      <div className="container flex flex-col gap-4">
        <h3 className="font-extrabold text-4xl text-center">New Arrivals</h3>
        <div>
          {NEW_ARRIVALS.map((product) => (
            <Link href={`product/${product.id}`} key={product.id}>
              <ProductCard
                key={product.itemName}
                image={product.image}
                alt={product.alt}
                rating={product.rating}
                itemName={product.itemName}
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

export default NewArrivalsPage;
