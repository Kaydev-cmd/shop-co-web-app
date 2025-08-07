import React from "react";
import ProductCartCard from "@/components/common/ProductCartCard";
import { FaArrowRight } from "react-icons/fa6";
import Subscribe from "@/components/common/Subscribe";
import { useCart } from "@/context/CartContext";

const CartPage = () => {
  const { cartItems, removeFromCart, totalPrice } = useCart();

  console.log(cartItems);

  const subtotal = cartItems.reduce((acc, cartItem) => {
    return acc + Number(cartItem.productPrice) * Number(cartItem.quantity);
  }, 0);

  const deliveryFee = 15;

  const total = totalPrice + deliveryFee;

  return (
    <div className="container">
      <h1 className="font-extrabold text-2xl" style={{ marginBottom: "20px" }}>
        Your Cart
      </h1>

      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div className="flex flex-col gap-6">
          {/* Cart Items */}
          <div className="card border border-gray-300 flex flex-col gap-4 rounded-xl">
            {cartItems.map((cartItem) => (
              <div
                key={`${cartItem.id}-${cartItem.productSize}-${cartItem.productColor}`}
              >
                <ProductCartCard
                  productImage={cartItem.productImage}
                  productName={cartItem.productName}
                  productSize={cartItem.productSize}
                  productColor={cartItem.productColor}
                  productPrice={cartItem.productPrice}
                  quantity={cartItem.quantity}
                  onRemove={() => removeFromCart(cartItem)}
                />
              </div>
            ))}
          </div>

          {/* Order Summary */}
          {cartItems.length > 0 && (
            <div className="flex flex-col card border border-gray-300 gap-3 rounded-xl p-4">
              <h2 className="font-bold text-xl">Order Summary</h2>

              <div className="flex justify-between">
                <p className="text-[#666666] md:text-lg">Subtotal</p>
                <p className="font-bold md:text-lg">${subtotal.toFixed(2)}</p>
              </div>

              <div className="flex justify-between">
                <p className="text-[#666666] md:text-lg">Delivery Fee</p>
                <p className="font-bold md:text-lg">
                  ${deliveryFee.toFixed(2)}
                </p>
              </div>

              <div className="border border-gray-300" />

              <div className="flex justify-between">
                <p className="text-[#666666] md:text-lg">Total</p>
                <p className="font-bold md:text-lg">${total.toFixed(2)}</p>
              </div>

              <div className="flex justify-center">
                <button className="bg-black text-white px-6 py-2 rounded-md flex items-center gap-4 hover:bg-gray-900 transition-all">
                  Go to Checkout <FaArrowRight size={20} />
                </button>
              </div>
            </div>
          )}
        </div>
      )}

      <section>
        <Subscribe />
      </section>
    </div>
  );
};

export default CartPage;
