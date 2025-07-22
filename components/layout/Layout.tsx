import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import { LayoutProps } from "@/interfaces";
import Banner from "../common/Banner";

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <Banner />
      <Header />
      <main className="min-h-screen">{children}</main>
      <Footer />
    </>
  );
};

export default Layout;
