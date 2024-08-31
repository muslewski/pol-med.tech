import { Link, Route, Routes, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import { Suspense, lazy, useEffect, useState } from "react";

import { goToTopRough } from "./utils/goToTop";
import { ErrorBoundary } from "react-error-boundary";
import { useTranslation } from "react-i18next";

// Lazy load the components using React.lazy
const Home = lazy(() => import("./pages/Home/Home"));
const Education = lazy(() => import("./pages/Education/Education"));
const EducationProduct = lazy(() =>
  import("./pages/Education/Product/EducationProduct")
);
const SpecialProduct = lazy(() =>
  import("./pages/Education/Product/SpecialProduct")
);
const Oils = lazy(() => import("./pages/Oils/Oils"));
const Tools = lazy(() => import("./pages/Tools/Tools"));
const About = lazy(() => import("./pages/About/About"));
const Contact = lazy(() => import("./pages/Contact/Contact"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy/PrivacyPolicy"));
const Copyright = lazy(() => import("./pages/Copyright/Copyright"));

function App() {
  const { t: tOthers } = useTranslation("Others");
  const { t: tPageTitles } = useTranslation("PageTitles");
  const { t: tPageDescriptions } = useTranslation("PageDescriptions");

  // Scroll to top on every route change
  const { pathname } = useLocation();
  useEffect(() => {
    goToTopRough();
  }, [pathname]);

  // Set the title of the page
  useEffect(() => {
    let title, description;
    switch (pathname) {
      case "/":
        title = tPageTitles("home_page_title");
        description = tPageDescriptions("home_page_description");
        break;
      case "/Edukacja_i_badania":
        title = tPageTitles("education_page_title");
        description = tPageDescriptions("education_page_description");
        break;
      case "/Edukacja_i_badania/interaktywna_platforma_edukacyjna":
        title = tPageTitles("education_special_page_title");
        description = tPageDescriptions("education_special_page_description");
        break;
      case "/Oleje_UCO":
        title = tPageTitles("oils_page_title");
        description = tPageDescriptions("oils_page_description");
        break;
      case "/Narzedzia":
        title = tPageTitles("tools_page_title");
        description = tPageDescriptions("tools_page_description");
        break;
      case "/O_nas":
        title = tPageTitles("about_page_title");
        description = tPageDescriptions("about_page_description");
        break;
      case "/Kontakt":
        title = tPageTitles("contact_page_title");
        description = tPageDescriptions("contact_page_description");
        break;
      case "/Polityka_prywatnosci":
        title = tPageTitles("privacy_policy_page_title");
        description = tPageDescriptions("privacy_policy_page_description");
        break;
      case "/Prawa_autorskie":
        title = tPageTitles("copyright_page_title");
        description = tPageDescriptions("copyright_page_description");
        break;
      default:
        title = tPageTitles("default_page_title");
        description = tPageDescriptions("home_page_description");
    }
    document.title = title;
    document
      .querySelector('meta[name="description"]')
      .setAttribute("content", description);
  }, [pathname, tPageTitles]);

  // State for zooming in the image
  const [zoomIn, setZoomIn] = useState(false);
  const [mainPhoto, setMainPhoto] = useState(null);

  // Main Background Color (pssst: footer is responsible for changing it)
  const [bgColor, setBgColor] = useState("#040030");

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
            alt={tOthers("education_product_main_image_alt")}
          />
        </div>
      )}
      <Navbar bgColor={bgColor} />
      <div
        key={pathname}
        className="wrapper"
        style={{ backgroundColor: bgColor }}
      >
        <ErrorBoundary
          fallback={
            <div className="w-full px-6 sm:px-16 h-full flex justify-center items-center text-white font-exo text-2xl sm:text-4xl">
              Oops! Złapaliśmy błąd i teraz go naprawiamy. Tymczasem, może
              filiżanka kawy?
            </div>
          }
        >
          <Suspense
            fallback={
              <div className="w-full h-full flex justify-center items-center text-white font-exo text-5xl">
                Ładowanie...
              </div>
            }
          >
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/Edukacja_i_badania" element={<Education />} />
              <Route
                path="/Edukacja_i_badania/interaktywna_platforma_edukacyjna"
                element={
                  <SpecialProduct
                    setZoomIn={setZoomIn}
                    mainPhoto={mainPhoto}
                    setMainPhoto={setMainPhoto}
                  />
                }
              />
              <Route
                path="/Edukacja_i_badania/:id"
                element={
                  <EducationProduct
                    setZoomIn={setZoomIn}
                    mainPhoto={mainPhoto}
                    setMainPhoto={setMainPhoto}
                  />
                }
              />
              <Route path="/Oleje_UCO" element={<Oils />} />
              <Route path="/Narzedzia" element={<Tools />} />
              <Route path="/O_nas" element={<About />} />
              <Route path="/Kontakt" element={<Contact />} />
              <Route path="/Polityka_prywatnosci" element={<PrivacyPolicy />} />
              <Route path="/Prawa_autorskie" element={<Copyright />} />
            </Routes>
            <Footer bgColor={bgColor} setBgColor={setBgColor} />
          </Suspense>
        </ErrorBoundary>
      </div>
    </>
  );
}

export default App;
