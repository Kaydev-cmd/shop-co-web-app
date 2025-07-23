import React from "react";
import Hero from "@/components/common/Hero";
import ProductCard from "@/components/common/ProductCard";
import { NEW_ARRIVALS, REVIEWS, TOP_SELLING } from "@/constants";
import Button from "@/components/common/Button";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import ReviewCard from "@/components/common/ReviewCard";
import Subscribe from "@/components/common/Subscribe";

const Home = () => {
  return (
    <div>
      <Hero />
      {/* New Arrivals */}
      <section id="newArrivals">
        <div className="container flex flex-col gap-4">
          <h3 className="font-extrabold text-4xl text-center">New Arrivals</h3>
          <div className="grid grid-cols-1">
            {NEW_ARRIVALS.map((product) => (
              <ProductCard
                key={product.itemName}
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

      {/* Top Selling */}
      <section id="topSelling">
        <div className="container flex flex-col gap-4">
          <h3 className="font-extrabold text-4xl text-center">Top Selling</h3>
          <div className="grid grid-cols-1">
            {TOP_SELLING.map((product) => (
              <ProductCard
                key={product.itemName}
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

      {/* Reviews */}
      <section id="reviews">
        <div className="container flex flex-col gap-4">
          <div
            className="flex justify-between items-baseline-last"
            style={{ marginBottom: "16px" }}
          >
            <h3 className="font-extrabold text-4xl">Our Happy Customers</h3>
            <div className="flex gap-6">
              <FaArrowLeftLong size={20} />
              <FaArrowRightLong size={20} />
            </div>
          </div>
          <div className="grid grid-cols-1 gap-4">
            {REVIEWS.map((review) => (
              <ReviewCard
                key={review.nameOfUser}
                nameOfUser={review.nameOfUser}
                review={review.review}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="container">
        <Subscribe />
      </section>
    </div>
  );
};

export default Home;
