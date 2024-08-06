import { Link, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Suspense, lazy, useEffect, useState } from "react";

import { goToTopRough } from "./utils/goToTop";

// Lazy load the components
const Home = lazy(() => import("./pages/Home/Home"));
const Education = lazy(() =>
  import(/* webpackPrefetch: true */ "./pages/Education/Education")
);
const EducationProduct = lazy(() =>
  import(
    /* webpackPrefetch: true */ "./pages/Education/Product/EducationProduct"
  )
);
const Oils = lazy(() =>
  import(/* webpackPrefetch: true */ "./pages/Oils/Oils")
);
const Tools = lazy(() => import(/* webpackPrefetch: true */ "./pages/Tools"));
const About = lazy(() => import(/* webpackPrefetch: true */ "./pages/About"));
const Contact = lazy(() =>
  import(/* webpackPrefetch: true */ "./pages/Contact")
);
const PrivacyPolicy = lazy(() =>
  import(/* webpackPrefetch: true */ "./pages/PrivacyPolicy")
);
const Copyright = lazy(() =>
  import(/* webpackPrefetch: true */ "./pages/Copyright")
);

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    goToTopRough();
  }, [pathname]);

  useEffect(() => {
    // Trigger prefetching when the homepage is loaded
    import(/* webpackPrefetch: true */ "./pages/Education/Education");
    import(
      /* webpackPrefetch: true */ "./pages/Education/Product/EducationProduct"
    );
    import(/* webpackPrefetch: true */ "./pages/Oils/Oils");
    import(/* webpackPrefetch: true */ "./pages/Tools");
    import(/* webpackPrefetch: true */ "./pages/About");
    import(/* webpackPrefetch: true */ "./pages/Contact");
    import(/* webpackPrefetch: true */ "./pages/PrivacyPolicy");
    import(/* webpackPrefetch: true */ "./pages/Copyright");
  }, []);

  const [zoomIn, setZoomIn] = useState(false);
  const [mainPhoto, setMainPhoto] = useState(null);

  return (
    <>
      {zoomIn && (
        <div
          className="fixed bg-black/50 w-full h-full flex justify-center items-center z-100"
          onClick={() => setZoomIn(false)}
        >
          <img
            className="cursor-zoom-out max-h-[95%] max-w-[93%] rounded shadow-[0_65px_100px_-15px_rgba(0,0,0,0.9)]"
            src={mainPhoto}
          />
        </div>
      )}
      <Navbar />
      <div className="wrapper bg-secondary-dark">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/pol-med.tech/" element={<Home />} />
            <Route
              path="/pol-med.tech/Edukacja_i_badania"
              element={<Education />}
            />
            <Route
              path="/pol-med.tech/Edukacja_i_badania/:id"
              element={
                <EducationProduct
                  setZoomIn={setZoomIn}
                  mainPhoto={mainPhoto}
                  setMainPhoto={setMainPhoto}
                />
              }
            />
            <Route path="/pol-med.tech/Oleje_UCO" element={<Oils />} />
            <Route path="/pol-med.tech/Narzedzia" element={<Tools />} />
            <Route path="/pol-med.tech/O_nas" element={<About />} />
            <Route path="/pol-med.tech/Kontakt" element={<Contact />} />
            <Route
              path="/pol-med.tech/Polityka_prywatnosci"
              element={<PrivacyPolicy />}
            />
            <Route
              path="/pol-med.tech/Prawa_autorskie"
              element={<Copyright />}
            />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </>
  );
}

export default App;
