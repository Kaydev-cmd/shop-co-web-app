import React from "react";
import { useCart } from "@/context/CartContext";
import { MdOutlineShoppingCart } from "react-icons/md";
import { useRouter } from "next/router";

const CartIcon = () => {
  const { cartItems } = useCart();
  const router = useRouter();

  const totalItems = cartItems.reduce(
    (acc, cartItem) => acc + cartItem.quantity,
    0
  );

  return (
    <div className="relative">
      <MdOutlineShoppingCart
        size={28}
        onClick={() => router.push("/cart")}
        className="hover:text-blue-600 transition-all duration-300 cursor-pointer"
      />
      {totalItems > 0 && (
        <span
          className="absolute bottom-4 left-4 bg-red-500 text-white text-xs rounded-full"
          style={{ padding: "0px 4px" }}
        >
          {totalItems}
        </span>
      )}
    </div>
  );
};

export default CartIcon;
