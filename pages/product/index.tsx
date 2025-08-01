import React from "react";
import ProductDetails from "@/components/products/ProductDetails";
import { TOP_SELLING } from "@/constants";
import ProductCard from "@/components/common/ProductCard";
import Subscribe from "@/components/common/Subscribe";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const ProductPage = () => {
  return (
    <>
      <ProductDetails />

      {/* You might also like */}
      <section id="alsoLike">
        <div className="container flex flex-col gap-4">
          <h3 className="font-extrabold text-4xl text-center uppercase">
            You Might Also Like
          </h3>
          <div>
            <Swiper pagination={true} modules={[Pagination]}>
              {TOP_SELLING.map((product) => (
                <SwiperSlide>
                  <ProductCard
                    key={product.itemName}
                    image={product.image}
                    alt={product.alt}
                    itemName={product.itemName}
                    price={product.price}
                    rating={product.rating}
                  />
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </section>

      <section>
        <Subscribe />
      </section>
    </>
  );
};

export default ProductPage;
