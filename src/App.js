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
import Navbar from "./components/Navbar";

const App = () => {
  const [nameActive, setNameActive] = useState(false);
  const [pActive, setPActive] = useState(false);

  useEffect((_) => {
    const handleScroll = (_) => {
      if (window.pageYOffset > 70) {
        setNameActive(true);
        setPActive(true);
      } else {
        setNameActive(false);
        setPActive(false);
      }
    };
    window.addEventListener("scroll", handleScroll, false);
    return (_) => {
      window.addEventListener("scroll", handleScroll, false);
    };
  }, []);
  useEffect(() => {
    AOS.init({ duration: 1500, once: true });
  }, []);
  return (
    <>
      <ScrollToTop />
      <SnackbarProvider maxSnack={3}>
        <Suspense fallback={<Loading />}>
          <Navbar nameActive={nameActive} pActive={pActive} />
          <Router />
        </Suspense>
      </SnackbarProvider>
      <Analytics />
    </>
  );
};

export default App;
