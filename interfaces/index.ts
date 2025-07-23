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
  image: string;
  alt: string;
  itemName: string;
  price: string;
}

export interface ReviewCardProps {
  nameOfUser: string;
  review: string;
}
