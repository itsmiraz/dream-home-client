import Footer from "@/components/shared/Footer/Footer";
import Header from "@/components/shared/header/header";
import React from "react";
import { Montserrat } from "next/font/google";
const montserrat = Montserrat({ subsets: ["latin"] });
const MainLayout = ({ children }) => {
  return (
    <div
      className={`max-w-[1440px] mx-auto transtion-all ease-in-out px-14  ${montserrat.className}`}
    >
      <Header />
      {children}
      <Footer />
    </div>
  );
};

export default MainLayout;
