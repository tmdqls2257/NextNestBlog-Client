import Header from "../elements/header/Header";
import React from "react";
import Navbar from "../elements/navbar/navbar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    // <div className="min-h-screen flex flex-col items-center">
    <div className="container px-4 md:px-0 max-w-6xl mx-auto -mt-32">
      <Header />
      {/* <div className="mx-0 sm:mx-6">
        <Navbar />
      </div> */}
      {children}
    </div>
  );
};
export default Layout;
