import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Education from "./pages/Education/Education";
import EducationProduct from "./pages/Education/EducationProduct";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Oils from "./pages/Oils";
import Tools from "./pages/Tools";
import About from "./pages/About";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <div className="wrapper bg-secondary-dark">
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
        <Footer />
      </div>
    </>
  );
}

export default App;
