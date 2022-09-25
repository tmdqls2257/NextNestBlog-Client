import "../styles/globals.css";
import type { AppProps } from "next/app";
// import { StoreProvider } from "store/Context";
import { RootStore } from "store/RootStore";
import { Provider } from "mobx-react";
// import UserStore from "store/userStore";
// import { StoreProvider } from "store/Context";
import { useEffect, useState } from "react";
import LoadingAnimation from "common/animation/animations";
import { Router } from "next/router";

function MyApp({ Component, pageProps }: AppProps) {
  const [isLoading, setIsLoading] = useState(false);
  useEffect(() => {
    Router.events.on("routeChangeStart", () => {
      setIsLoading(true);
    });
    Router.events.on("routeChangeComplete", () => {
      setIsLoading(false);
    });
    Router.events.on("routeChangeError", () => {
      setIsLoading(false);
    });

    return () => {
      Router.events.off("routeChangeStart", () => {
        setIsLoading(true);
      });
      Router.events.off("routeChangeComplete", () => {
        setIsLoading(false);
      });
      Router.events.off("routeChangeError", () => {
        setIsLoading(false);
      });
    };
  });

  return (
    <Provider store={RootStore}>
      {isLoading && <LoadingAnimation />}
      <Component {...pageProps} />
    </Provider>
  );
}

export default MyApp;
