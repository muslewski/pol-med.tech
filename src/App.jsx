import { Link, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Suspense, lazy, useEffect } from "react";

// Lazy load the components
const Home = lazy(() => import("./pages/Home/Home"));
const Education = lazy(() =>
  import(/* webpackPrefetch: true */ "./pages/Education/Education")
);
const EducationProduct = lazy(() =>
  import(/* webpackPrefetch: true */ "./pages/Education/EducationProduct")
);
const Oils = lazy(() =>
  import(/* webpackPrefetch: true */ "./pages/Oils/Oils")
);
const Tools = lazy(() => import(/* webpackPrefetch: true */ "./pages/Tools"));
const About = lazy(() => import(/* webpackPrefetch: true */ "./pages/About"));
const Contact = lazy(() =>
  import(/* webpackPrefetch: true */ "./pages/Contact")
);

function App() {
  const { pathname } = useLocation();
  useEffect(() => {
    document.querySelector(".wrapper").scrollTo(0, 0);
  }, [pathname]);

  useEffect(() => {
    // Trigger prefetching when the homepage is loaded
    import(/* webpackPrefetch: true */ "./pages/Education/Education");
    import(/* webpackPrefetch: true */ "./pages/Education/EducationProduct");
    import(/* webpackPrefetch: true */ "./pages/Oils/Oils");
    import(/* webpackPrefetch: true */ "./pages/Tools");
    import(/* webpackPrefetch: true */ "./pages/About");
    import(/* webpackPrefetch: true */ "./pages/Contact");
  }, []);

  return (
    <>
      <Navbar />
      <div className="wrapper bg-secondary-dark">
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            <Route path="/polmed-router/" element={<Home />} />
            <Route
              path="/polmed-router/Edukacja_i_badania"
              element={<Education />}
            />
            <Route
              path="/polmed-router/Edukacja_i_badania/:id"
              element={<EducationProduct />}
            />
            <Route path="/polmed-router/Oleje_UCO" element={<Oils />} />
            <Route path="/polmed-router/Narzedzia" element={<Tools />} />
            <Route path="/polmed-router/O_nas" element={<About />} />
            <Route path="/polmed-router/Kontakt" element={<Contact />} />
          </Routes>
        </Suspense>
        <Footer />
      </div>
    </>
  );
}

export default App;
