import { ReactNode } from "react";

export interface LayoutProps {
  children: ReactNode;
}

export interface ButtonProps {
  title: string;
  onClick?: () => void;
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
  price: string;
  rating: string;
  description?: string;
}

export interface ReviewCardProps {
  nameOfUser: string;
  review: string;
}

export interface PillProps {
  title: string;
}

export interface ProductInfoCardProps {
  productName: string;
  productRating: number;
  productPrice: string;
  productDescription: string;
}

export interface CategoryProps {
  categoryName: string;
}