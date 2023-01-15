import NavBar from "./pages/NavBar";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import About from "./pages/About";
import Blog from "./pages/Blog";
import {BrowserRouter, Routes,Route,} from "react-router-dom";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
    <BrowserRouter>
      
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/Blog" element={<Blog />}/>
          <Route path="/Blog" element={<Contact />}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
