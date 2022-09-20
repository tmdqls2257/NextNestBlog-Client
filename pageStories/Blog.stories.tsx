import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import Blogs from "../pages/blogs/index";
import { BlogData } from "../data/blogData";

export default {
  title: "pages/Blog",
  component: Blogs,
} as ComponentMeta<typeof Blogs>;

export const layout: ComponentStory<typeof Blogs> = () => (
  <Blogs blogs={BlogData} />
);
