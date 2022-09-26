import "../styles/globals.css";
import { RouterContext } from "next/dist/shared/lib/router-context";
import * as NextImage from "next/image";

const OriginalNextImage = NextImage.default;

Object.defineProperty(NextImage, "default", {
  configurable: true,
  value: (props) => <OriginalNextImage {...props} unoptimized />,
});
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  value: (props) => <OriginalNextImage {...props} unoptimized />,

  nextRouter: {
    Provider: RouterContext.Provider,
  },
};
