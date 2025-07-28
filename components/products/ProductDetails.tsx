import React from "react";
import Subscribe from "../common/Subscribe";
import { PRODUCT_INFO } from "@/constants";
import { TOP_SELLING } from "@/constants";
import ProductCard from "../common/ProductCard";
import ProductInfoCard from "../common/ProductInfoCard";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const ProductDetails = () => {
  return (
    <div className="container flex flex-col gap-3">
      {PRODUCT_INFO.map((product) => (
        <ProductInfoCard
          key={product.id}
          productName={product.productName}
          productRating={product.productRating}
          productPrice={product.productPrice}
          productDescription={product.productDescription}
        />
      ))}

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
    </div>
  );
};

export default ProductDetails;
