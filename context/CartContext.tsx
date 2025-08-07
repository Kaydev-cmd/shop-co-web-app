import { CartContextType, CartItem } from "@/interfaces";
import React, { createContext, useContext, useState } from "react";

export const CartContext = createContext<CartContextType | undefined>(
  undefined
);

const CartProvider = ({ children }: { children: React.ReactNode }) => {
  const [cartItems, setCartItems] = useState<CartItem[]>([]);

  const addToCart = (item: CartItem) => {
    setCartItems((prev) => {
      const existing = prev.find(
        (cartItem) =>
          cartItem.id === item.id &&
          cartItem.productSize === item.productSize &&
          cartItem.productColor === item.productColor
      );

      if (existing) {
        return prev.map((cartItem) =>
          cartItem === existing
            ? { ...cartItem, quantity: cartItem.quantity + item.quantity }
            : cartItem
        );
      } else {
        return [...prev, item];
      }
    });
  };

  const removeFromCart = (item: CartItem) => {
    setCartItems((prev) =>
      prev.filter(
        (cartItem) =>
          !(
            cartItem.id === item.id &&
            cartItem.productSize === item.productSize &&
            cartItem.productColor === item.productColor
          )
      )
    );
  };

  const total = cartItems.reduce(
    (acc, cartItem) =>
      acc + Number(cartItem.productPrice) * Number(cartItem.quantity),
    0
  );

  const clearCart = () => setCartItems([]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        addToCart,
        totalPrice: total,
        removeFromCart,
        clearCart,
        setCartItems,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) {
    throw new Error("useCart must be used within a CartProvider");
  }
  return context;
};

export default CartProvider;
