import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import Hero from "./hero";

export default {
  title: "Components/Hero",
  component: Hero,
} as ComponentMeta<typeof Hero>;

export const icon: ComponentStory<typeof Hero> = () => <Hero></Hero>;
