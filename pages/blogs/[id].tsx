import React, { useState } from "react";
import Image from "next/image";
import parse from "html-react-parser";

import Layout from "../../layouts/layout";
import BlogLayout from "../../layouts/BlogLayout";
import BlogService from "../../service/blogService";
import { BlogModel } from "../../data/blogData";
import Comment from "../../components/comment/Comment";

type BlogDetailProps = {
  // children: React.ReactNode;
  postDetail: BlogModel;
};

const BlogDetail = ({ postDetail }: BlogDetailProps) => {
  return (
    <Layout>
      <BlogLayout>
        <Image
          src={postDetail.imageUrl || "/black_girl.webp"}
          className="block"
          alt=""
          width={"1000"}
          height={"300"}
        />
        <section className="min-h-screen max-w-5xl mx-auto ">
          <h1>{postDetail.title}</h1>
          {parse(postDetail.contents)}
        </section>
        <Comment blogId={postDetail.id} />
      </BlogLayout>
    </Layout>
  );
};

export const getServerSideProps = async (context: {
  query: { id: string };
}) => {
  try {
    const postDetail = await BlogService.getBlog(context.query.id);
    return { props: { postDetail } };
  } catch (err) {
    return { props: {} };
  }
};

export default BlogDetail;
