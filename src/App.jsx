import { Link, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Education from "./pages/Education";
import EducationProduct from "./pages/EducationProduct";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/polmed-router/" element={<Home />} />
        <Route path="/polmed-router/Education" element={<Education />} />
        <Route
          path="/polmed-router/Education/:id"
          element={<EducationProduct />}
        />
      </Routes>
    </>
  );
}

export default App;
