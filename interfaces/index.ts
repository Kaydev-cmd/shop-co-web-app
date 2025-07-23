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
