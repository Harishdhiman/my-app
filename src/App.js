import NavBar from "./pages/NavBar";
import Home from "./pages/Home";
import Footer from "./pages/Footer";
import About from "./pages/About";
import Blog from "./pages/Blog";
import {BrowserRouter, Routes,Route,} from "react-router-dom";

function App() {
  return (
    <>
    <BrowserRouter>
      
      <NavBar/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/About" element={<About />}/>
          <Route path="/Blog" element={<Blog />}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
    </>
  );
}

export default App;
