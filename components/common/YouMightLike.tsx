import React from "react";
import { TOP_SELLING } from "@/constants";
import ProductCard from "./ProductCard";
import Link from "next/link";

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper/modules";

const YouMightLike = () => {
  return (
    <div className="flex flex-col gap-4">
      <div>
        <Swiper pagination={true} modules={[Pagination]}>
          {TOP_SELLING.map((product) => (
            <SwiperSlide>
              <Link href={`/product/${product.id}`} key={product.id}>
                <ProductCard
                  key={product.itemName}
                  image={product.image}
                  alt={product.alt}
                  itemName={product.itemName}
                  price={product.price}
                  rating={product.rating}
                />
              </Link>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default YouMightLike;
