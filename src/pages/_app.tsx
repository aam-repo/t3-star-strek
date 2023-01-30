import { type AppType } from "next/app";
import { type Session } from "next-auth";
import { SessionProvider } from "next-auth/react";

import { MantineProvider } from "@mantine/core";

import { api } from "../utils/api";

import "../styles/globals.css";
import Layout from "../layout/Layout";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const MyApp: AppType<{ session: Session | null }> = ({
  Component,
  pageProps: { session, ...pageProps },
}) => {
  const [routingPageOffset, setRoutingPageOffset] = useState(0);
  const router = useRouter();
  useEffect(() => {
    const pageChange = () => {
      setRoutingPageOffset(window.scrollY);
    };
    router.events.on("routeChangeStart", pageChange);
  }, [router.events]);
  return (
    <SessionProvider session={session}>
      <MantineProvider
        withGlobalStyles
        withNormalizeCSS
        theme={{
          /** Put your mantine theme override here */
          colorScheme: "light",
        }}
      >
        <Layout routingPageOffset={routingPageOffset}>
          <Component {...pageProps} />
        </Layout>
      </MantineProvider>
    </SessionProvider>
  );
};

export default api.withTRPC(MyApp);
