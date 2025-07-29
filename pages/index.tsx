import React from "react";
import Hero from "@/components/common/Hero";
import ProductCard from "@/components/common/ProductCard";
import { NEW_ARRIVALS, REVIEWS, TOP_SELLING } from "@/constants";
import Button from "@/components/common/Button";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import ReviewCard from "@/components/common/ReviewCard";
import Subscribe from "@/components/common/Subscribe";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Home = () => {
  return (
    <div>
      <Hero />
      {/* New Arrivals */}
      <section id="newArrivals">
        <div className="container flex flex-col gap-4">
          <h3 className="font-extrabold text-4xl text-center">New Arrivals</h3>
          <div>
            <Swiper pagination={true} modules={[Pagination]}>
              {NEW_ARRIVALS.map((product) => (
                <SwiperSlide>
                  <ProductCard
                    key={product.itemName}
                    image={product.image}
                    alt={product.alt}
                    rating={product.rating}
                    itemName={product.itemName}
                    price={product.price}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          <Button title="View All" />
        </div>
      </section>

      <div className="container">
        <div className="border border-gray-300"></div>
      </div>

      {/* Top Selling */}
      <section id="topSelling">
        <div className="container flex flex-col gap-4">
          <h3 className="font-extrabold text-4xl text-center">Top Selling</h3>
          <div>
            <Swiper pagination={true} modules={[Pagination]}>
              {TOP_SELLING.map((product) => (
                <SwiperSlide>
                  <ProductCard
                    key={product.itemName}
                    image={product.image}
                    alt={product.alt}
                    itemName={product.itemName}
                    rating={product.rating}
                    price={product.price}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
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
          <div>
            <Swiper>
              {REVIEWS.map((review) => (
                <SwiperSlide>
                  <ReviewCard
                    key={review.nameOfUser}
                    nameOfUser={review.nameOfUser}
                    review={review.review}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
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
