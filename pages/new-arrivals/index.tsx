import React from "react";
import { NEW_ARRIVALS } from "@/constants";
import Link from "next/link";
import ProductCard from "@/components/common/ProductCard";
import Button from "@/components/common/Button";
import Subscribe from "@/components/common/Subscribe";
import { motion } from "framer-motion";

const NewArrivalsPage = () => {
  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <section>
          <div className="container flex flex-col gap-4">
            <h3 className="font-extrabold text-4xl text-center">
              New Arrivals
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
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

export default NewArrivalsPage;
