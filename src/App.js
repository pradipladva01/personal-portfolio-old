import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import React, { Suspense, useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./App.css";
import ScrollToTop from "./components/ScrollToTop";
import Loading from "./components/Loading";
// import Cursor from "./components/Cursor";
import { Analytics } from "@vercel/analytics/react";
import Router from "./Routes";
import { SnackbarProvider } from "notistack";

const App = () => {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);
  return (
    <>
      <ScrollToTop />
      <SnackbarProvider maxSnack={3}>
        <Suspense fallback={<Loading />}>
          {/* <Cursor /> */}
          <Router />
        </Suspense>
      </SnackbarProvider>
      <Analytics />
    </>
  );
};

export default App;
