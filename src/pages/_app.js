import "@styles/tailwind.css";
import MainLayout from "@layout/MainLayout";
import { ProviderAuth } from "@hooks/useAuth";
import Head from "next/head";

function MyApp({ Component, pageProps }) {
  return (
    <ProviderAuth>
      <Head>
        <title>Next Shop Admin</title>
      </Head>
      <MainLayout>
        <Component {...pageProps} />
      </MainLayout>
    </ProviderAuth>
  );
}

export default MyApp;
