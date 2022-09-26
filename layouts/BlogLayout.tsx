import React from "react";
import Footer from "../elements/footer/footer";
import Image from "next/image";

import Layout from "./layout";

type BlogLyaoutProps = {
  children: React.ReactNode;
};

const BlogLayout = ({ children }: BlogLyaoutProps) => {
  return (
    <div className="bg-white">
      {children}
      <Footer />
    </div>
  );
};

export default BlogLayout;
