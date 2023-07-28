import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";
import './App.css';
import ScrollToTop from './components/ScrollToTop';
import Router from './Routes';
import { Suspense } from "react";
// import Loading from './components/Loading';

function App() {
  return (
    <>
      <ScrollToTop />
      <Suspense>
        <Router />
      </Suspense>
    </>
  );
}
// fallback={<Loading />}
export default App;
