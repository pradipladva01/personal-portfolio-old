import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import AOS from 'aos';
import 'aos/dist/aos.css';
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import Router from './Routes';
import { Suspense, useEffect } from "react";
import Loading from './components/Loading';

function App() {
  useEffect(() => {
    AOS.init({ duration: 1500, once: true, });
  }, [])
  return (
    <>
      <ScrollToTop />
      <Suspense fallback={<Loading />}>
        <Router />
      </Suspense>
    </>
  );
}

export default App;
