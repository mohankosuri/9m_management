import Layout from "@9mindia/component/layout";
import { Layouts, SiteProps } from "@9mindia/component/layout/type";
import "@9mindia/styles/globals.css";
import type { AppProps } from "next/app";
import Footer from "@9mindia/component/footer";

export default function App({ Component, pageProps }: SiteProps) {
  const Layout = Layouts[Component.Layout] ?? ((page) => page);
  return (
    <>
      <Layout>
        <Component {...pageProps} />
        
      </Layout>
    </>
  );
}
