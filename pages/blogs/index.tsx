import React, { useEffect, useState } from "react";
import Layout from "../../layouts/layout";
import { BlogData, BlogModel } from "../../data/blogData";
import BlogCard from "../../common/card/BlogCard";
import BlogService from "../../service/blogService";
import Hero from "components/hero/hero";

type BlogsProps = {
  blogs: BlogModel[];
};

export default function Blogs({ blogs }: BlogsProps) {
  return (
    <Layout>
      <Hero />
      <ul className="flex flex-wrap gap-5 justify-center">
        {blogs.map((data, idx) => (
          <BlogCard blogData={data} key={idx}></BlogCard>
        ))}
      </ul>
    </Layout>
  );
}

export const getStaticProps = async () => {
  try {
    const blogs = await BlogService.getAllBlogs();
    return { props: { blogs } };
  } catch (err) {
    console.log(err);
    return { props: {} };
  }
};
