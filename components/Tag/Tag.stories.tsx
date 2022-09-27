import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import Tag from "./tag";

export default {
  title: "Components/Tag",
  component: Tag,
} as ComponentMeta<typeof Tag>;

export const icon: ComponentStory<typeof Tag> = () => <Tag></Tag>;
