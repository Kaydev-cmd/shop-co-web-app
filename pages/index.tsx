import React from "react";
import Hero from "@/components/common/Hero";
import ProductCard from "@/components/common/ProductCard";
import { PRODUCTS } from "@/constants";
import Button from "@/components/common/Button";

const Home = () => {
  return (
    <div>
      <Hero />

      {/* New Arrivals */}
      <section id="newArrivals">
        <div className="container flex flex-col gap-4">
          <h3
            className="font-extrabold text-4xl text-center"
            style={{ marginBottom: "16px" }}
          >
            New Arrivals
          </h3>
          <div className="grid grid-cols-1">
            {PRODUCTS.map((product) => (
              <ProductCard
                image={product.image}
                alt={product.alt}
                itemName={product.itemName}
                price={product.price}
              />
            ))}
          </div>
          <Button title="View All" />
        </div>
      </section>
    </div>
  );
};

export default Home;
