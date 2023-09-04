import React, { Suspense, useEffect, useState } from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { CacheProvider, EmotionCache } from "@emotion/react";
import { ThemeSettings } from "../src/theme/Theme";
import createEmotionCache from "../src/createEmotionCache";
import { Provider } from "react-redux";
import Store from "../src/store/Store";
import RTL from "./../src/layouts/full/shared/customizer/RTL";
import { useSelector } from "../src/store/Store";
import { AppState } from "../src/store/Store";

import BlankLayout from "../src/layouts/blank/BlankLayout";
import FullLayout from "../src/layouts/full/FullLayout";

import "../src/_mockApis";
import "../src/utils/i18n";

// CSS FILES
import "react-quill/dist/quill.snow.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./global.css";
import Loadder from "src/components/shared/Loadder";
import toast, { Toaster } from "react-hot-toast";
import { t } from "i18next";
import useToast from "src/hooks/UseToast";
import { useRouter } from "next/router";
import ButtonsBar from "src/components/shared/ButtonsBar";
import { Box } from "@mui/material";
import MobileButtonsBar from "src/components/shared/MobileButtonsBar";

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

interface MyAppProps extends AppProps {
  emotionCache?: EmotionCache;
}

const layouts: any = {
  Blank: BlankLayout,
};

const MyApp = (props: MyAppProps) => {
  const {
    Component,
    emotionCache = clientSideEmotionCache,
    pageProps,
  }: any = props;
  const theme = ThemeSettings();
  const customizer = useSelector((state: AppState) => state.customizer);

  const layout = pageProps.layout || "Full";
  const Layout = layouts[Component.layout] || FullLayout;
  const ComponentWithLoadder = Loadder(Component);
  useEffect(() => {
    const toastStore = customizer.toast;
    let notifyToast: any;
    let txtToast: any;
    if (toastStore.type == "success") {
      txtToast = t(`${toastStore.msj}`);
      notifyToast = () => toast.success(txtToast);
    } else if (toastStore.type == "error") {
      txtToast = t(`${toastStore.msj}`);
      notifyToast = () => toast.error(txtToast);
    }
    if (customizer.toast.active) notifyToast();

    // const myToast = useToast(customizer.toast);
    // if (customizer.toast.active) myToast();
  }, [customizer.toast]);
  const router = useRouter();
  // console.log(router.route == "/auth/auth1/login");
  const isLogin = router.route == "/auth/auth1/login";
  if (typeof window !== "undefined" && !isLogin) {
    const id = localStorage?.getItem("id") || "";
    const token = localStorage?.getItem("token") || "";
    // console.log(id, token, "data localstorage");
    // if (!id && !token) window.location = "/auth/auth1/login" as any;
    if (!id && !token) router.push("/auth/auth1/login");
  }

  return (
    <CacheProvider value={emotionCache}>
      <Head>
        <title>Cosmetic Services | ERP</title>
        <meta name="description" content="Cosmetic Services.." key="desc" />
        <meta name="viewport" content="initial-scale=1, width=device-width" />
      </Head>
      <ThemeProvider theme={theme}>
        <RTL direction={customizer.activeDir}>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <Layout>
            {/* <Component {...pageProps} /> */}
            <ComponentWithLoadder
              isLoadding={customizer.isLoadding}
              {...pageProps}
            />
            {!isLogin && (
              <>
                <Box
                  sx={{
                    display: { xs: "none", sm: "block", md: "block" },
                  }}
                >
                  <ButtonsBar />
                </Box>
                <Box
                  // isOpen={true}
                  sx={{
                    display: { xs: "block", sm: "none", md: "none" },
                  }}
                >
                  <MobileButtonsBar />
                </Box>
              </>
            )}
            <Toaster />
          </Layout>
        </RTL>
      </ThemeProvider>
    </CacheProvider>
  );
};

export default (props: MyAppProps) => (
  <Provider store={Store}>
    <MyApp {...props} />
  </Provider>
);
