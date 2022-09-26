import React from "react";
import Footer from "../elements/footer/footer";
import Image from "next/image";

import Layout from "./layout";

type BlogLyaoutProps = {
  children: React.ReactNode;
};

const BlogLayout = ({ children }: BlogLyaoutProps) => {
  return (
    <>
      <Image
        src="/black_girl.webp"
        className="block"
        alt=""
        width={"1000"}
        height={"300"}
      />

      {children}
      <Footer />
    </>
  );
};

export default BlogLayout;
