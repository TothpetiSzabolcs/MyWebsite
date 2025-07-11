import Header from "./components/Header"
import { Route, Routes } from "react-router-dom"
import Home from "./pages/Home"
import WhoAmI from "./pages/WhoAmI"
import Footer from "./components/Footer"
import GetInTouch from "./pages/GetInTouch"
import Skills from "./components/Skills"
import Projects from "./pages/Projects"

function App() {
  return (
    <>
      <Header/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/whoami" element={<WhoAmI />} />
          <Route path="/getintouch" element={<GetInTouch />} />
          <Route path="/experience" element={<Skills />} />
          <Route path="/projects" element={<Projects />} />
        </Routes>
      <Footer/>
    </>
  )
}

export default App
