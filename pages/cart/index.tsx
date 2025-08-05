import React from "react";
import ProductCartCard from "@/components/common/ProductCartCard";
import { FaArrowRight } from "react-icons/fa6";
import { CART_ITEMS } from "@/constants";
import Subscribe from "@/components/common/Subscribe";

const CartPage = () => {
  return (
    <div className="container">
      <h1 className="font-extrabold text-2xl" style={{ marginBottom: "20px" }}>
        Your Cart
      </h1>
      <div className="flex flex-col gap-6">
        <div className="card border border-gray-300 flex flex-col gap-4 rounded-xl">
          {CART_ITEMS.map((item) => (
            <div key={item.id}>
              <ProductCartCard
                productImage={item.productImage}
                productName={item.productName}
                productSize={item.productSize}
                productColor={item.productColor}
                productPrice={item.productPrice}
              />
            </div>
          ))}
        </div>

        {/* Order Summary */}
        <div className="flex flex-col card border border-gray-300 gap-3 rounded-xl">
          <h2 className="font-bold text-xl">Order Summary</h2>
          <div className="flex justify-between">
            <p className="text-[#666666] md:text-lg">Subtotal</p>
            <p className="font-bold md:text-lg">$565</p>
          </div>
          <div className="flex justify-between">
            <p className="text-[#666666] md:text-lg">Delivery Fee</p>
            <p className="font-bold md:text-lg">$15</p>
          </div>

          <div className="container">
            <div className="border border-gray-300"></div>
          </div>

          <div className="flex justify-between">
            <p className="text-[#666666] md:text-lg">Total</p>
            <p className="font-bold md:text-lg">$467</p>
          </div>

          <div className="flex justify-center">
            <button className="bg-black flex items-center gap-4">
              Go to Checkout <FaArrowRight size={24} />
            </button>
          </div>
        </div>
      </div>

      <section>
        <Subscribe />
      </section>
    </div>
  );
};

export default CartPage;
