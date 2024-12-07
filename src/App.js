import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"
import Home from "./pages/Home";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Contact from "./pages/Contact";
import Skills from "./pages/Skills";
import HireMe from "./pages/HireMe";
// import Footer from "./pages/Footer";
function App() {
  return (
    <>
      {/* <Navbar/> */}
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/navbar" element={<Navbar />}/>
          <Route path="/about" element={<About />}/>
           <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/skills" element = {<Skills/>}/>
          <Route path="/hireme" element = {<HireMe/>}/>

        </Routes>
      </BrowserRouter>
     
    </>
    
  );
}

export default App;
