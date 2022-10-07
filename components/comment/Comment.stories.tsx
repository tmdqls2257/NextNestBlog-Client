import React from "react";

import { ComponentStory, ComponentMeta } from "@storybook/react";
import Comment from "./Comment";
import { Provider } from "mobx-react";
import { RootStore } from "../../store/RootStore";

export default {
  title: "Components/Comment",
  component: Comment,
} as ComponentMeta<typeof Comment>;

export const footer: ComponentStory<typeof Comment> = () => (
  <Provider store={RootStore}>
    <Comment blogId={"1"} />
  </Provider>
);
