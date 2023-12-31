import "./../styles/global.scss";
import type { AppProps } from "next/app";
import AppProvider from "../../Provider/AppProvider";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AppProvider>
      <Component {...pageProps} />
    </AppProvider>
  );
}
