import React, { useState } from "react";
import Hero from "@/components/common/Hero";
import Link from "next/link";
import ProductCard from "@/components/common/ProductCard";
import Button from "@/components/common/Button";
import ReviewCard from "@/components/common/ReviewCard";
import Subscribe from "@/components/common/Subscribe";
import { NEW_ARRIVALS, REVIEWS, TOP_SELLING } from "@/constants";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";
import { useRouter } from "next/router";
import { motion } from "framer-motion";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const Home = () => {
  const router = useRouter();
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextReview = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % REVIEWS.length);
  };

  const prevReview = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + REVIEWS.length) % REVIEWS.length
    );
  };

  const { nameOfUser } = REVIEWS[currentIndex];

  return (
    <div>
      <Hero />
      {/* New Arrivals */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <section id="newArrivals">
          <div className="container flex flex-col gap-4">
            <h3 className="font-extrabold text-4xl text-center">
              New Arrivals
            </h3>
            <div>
              <Swiper
                pagination={true}
                modules={[Pagination]}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
              >
                {NEW_ARRIVALS.map((product) => (
                  <SwiperSlide>
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
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <Button
              title="View All"
              onClick={() => router.push("/new-arrivals")}
            />
          </div>
        </section>
      </motion.div>

      <div className="container">
        <div className="border border-gray-300"></div>
      </div>

      {/* Top Selling */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <section id="topSelling">
          <div className="container flex flex-col gap-4">
            <h3 className="font-extrabold text-4xl text-center">Top Selling</h3>
            <div>
              <Swiper
                pagination={true}
                modules={[Pagination]}
                breakpoints={{
                  320: {
                    slidesPerView: 1,
                    spaceBetween: 10,
                  },
                  640: {
                    slidesPerView: 2,
                    spaceBetween: 20,
                  },
                  1024: {
                    slidesPerView: 3,
                    spaceBetween: 30,
                  },
                }}
              >
                {TOP_SELLING.map((product) => (
                  <SwiperSlide>
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
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <Button
              title="View All"
              onClick={() => router.push("/top-selling")}
            />
          </div>
        </section>
      </motion.div>

      {/* Reviews */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        transition={{ duration: 0.8 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <section id="reviews">
          <div className="container flex flex-col gap-4">
            <div
              className="flex justify-between items-baseline-last"
              style={{ marginBottom: "16px" }}
            >
              <h3 className="font-extrabold text-4xl">Our Happy Customers</h3>
              <div className="flex gap-6">
                <FaArrowLeftLong size={20} onClick={prevReview} />
                <FaArrowRightLong size={20} onClick={nextReview} />
              </div>
            </div>
            <div className="flex flex-col gap-4">
              <ReviewCard
                key={nameOfUser}
                nameOfUser={REVIEWS[currentIndex].nameOfUser}
                review={REVIEWS[currentIndex].review}
              />
            </div>
          </div>
        </section>
      </motion.div>

      {/* Newsletter */}
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
    </div>
  );
};

export default Home;
