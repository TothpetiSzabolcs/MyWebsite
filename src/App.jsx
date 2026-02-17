import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import StructuredData from "./components/StructuredData";
import Home from "./pages/Home";
import WhoAmI from "./pages/WhoAmI";
import GetInTouch from "./pages/GetInTouch";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  return null;
}

function App() {
  return (
    <div className="app-wrapper noise-overlay">
      <StructuredData />
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whoami" element={<WhoAmI />} />
        <Route path="/getintouch" element={<GetInTouch />} />
        <Route path="/experience" element={<Experience />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
