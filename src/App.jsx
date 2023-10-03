import BasicExample from "./layout/Navbar";
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";

import About from "./components/ABOUT/about";
import Contact from "./components/CONTACT/contact";
import Home from "./components/HOME/home";
import Navbar from "./layout/Navbar";
import Gallery from "./components/gallery"

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Navbar />}>
            <Route index element={<Home />}></Route>
            <Route path="about" element={<About />}></Route>
            <Route path="contact" element={<Contact />}></Route>
            <Route path="gallery" element={<Gallery />}></Route>

            <Route path="*" element={<Navigate replace to="/" />}></Route>
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
