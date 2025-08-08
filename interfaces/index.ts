import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export interface ButtonProps {
  title: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
}

export interface HeroStatsProps {
  amountOfUsers: string;
  description: string;
}

export interface ProductCardProps {
  id?: string;
  image: string;
  alt: string;
  itemName: string;
  price: number;
  rating: string;
  description?: string;
}

export interface ProductSearchCardProps {
  id?: string;
  image: string;
  alt: string;
  itemName: string;
  price: number;
  rating: string;
  description: string;
}

export interface ReviewCardProps {
  nameOfUser: string;
  review: string;
}

export interface PillProps {
  title: string;
  selected: boolean;
  onClick: () => void;
}

export interface PillGroupProps {
  selectedPill: string;
  onSelect: (size: string) => void;
}

export interface ProductInfoCardProps {
  productImage: string;
  productName: string;
  productRating: number;
  productPrice: number;
  productDescription: string;
}

export interface CategoryProps {
  categoryName: string;
}

export interface ProductCartCardProps {
  productImage: string;
  productName: string;
  productSize: string;
  productColor: string;
  productPrice: number;
  quantity?: number;
  onRemove?: () => void;
}

export interface CartItem {
  id: string;
  productName: string;
  productImage: string;
  productSize: string;
  productColor: string;
  productPrice: number;
  quantity: number;
}

export interface CartContextType {
  cartItems: CartItem[];
  addToCart: (item: CartItem) => void;
  removeFromCart: (item: CartItem) => void;
  clearCart: () => void;
  totalPrice: number;
  setCartItems: React.Dispatch<React.SetStateAction<CartItem[]>>;
}

export interface CounterProps {
  value: number;
  onChange: (newValue: number) => void;
}
